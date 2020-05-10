import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import withWidth, { WithWidth, isWidthDown, isWidthUp } from "@material-ui/core/withWidth";
import { MapStateToProps, connect, ConnectedProps } from "react-redux";
import { IState } from "../../redux/interfaces/IState";
import { ICharacter } from "../../interfaces/ICharacter";
import PageContainer from "../PageContainer/PageContainer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InformationBlock from "../InformationBlock/InformationBlock";
import Link from "../Link/Link";
import MultilineText from "../MultilineText/MultilineText";
import PersonCard from "../PersonCard/PersonCard";
import { ISearchFilters } from "../../redux/modules/search/ISearchFilters";
import { useRouter } from "next/router";
import { ROUTE_PATHS } from "../../routes";

import styles from "./CharacterContainer.styles";

interface IStateToProps {
  character: ICharacter;
}

const mapStateToProps: MapStateToProps<IStateToProps, {}, IState> = (state) => ({
  character: state.character.currentCharacter.data,
});

const connector = connect(mapStateToProps);

interface IProps extends ConnectedProps<typeof connector>, WithStyles<typeof styles>, WithWidth {}

const AnimeContainer: React.FC<IProps> = ({ classes, character, width }) => {
  const router = useRouter();
  const { image_url, member_favorites, url, name, name_kanji, about, voice_actors } = character;

  const search = React.useCallback(
    (filters: ISearchFilters) => {
      router.push({ pathname: ROUTE_PATHS.search, query: { ...filters } });
    },
    [router]
  );

  const title = `${name} ${name_kanji ? `(${name_kanji})` : ""}`;

  return (
    <PageContainer onSearch={search}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className={classes.contentContainer}>
            {isWidthDown("sm", width) && (
              <Typography gutterBottom variant="h6" component="h1" align="center">
                {title}
              </Typography>
            )}

            <div className={classes.titleImage}>
              <img src={image_url} alt={name} />
            </div>

            <Typography gutterBottom variant="body1" align="center">
              {`Member Favorites: ${member_favorites}`}
            </Typography>

            <div className={classes.sourceLink}>
              <Link
                href={url}
                prefetch={false}
                target="_blank"
                variant="body1"
                color="textSecondary"
              >
                View on MyAnimeList.net
              </Link>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={8}>
          <div className={classes.contentContainer}>
            {isWidthUp("md", width) && (
              <Typography gutterBottom variant="h6" component="h1">
                {title}
              </Typography>
            )}

            <InformationBlock title={"About"}>
              <Typography gutterBottom variant="body1">
                <MultilineText text={about} />
              </Typography>
            </InformationBlock>

            {voice_actors && (
              <InformationBlock title={"Voice Actors"}>
                <Grid container spacing={2}>
                  {voice_actors.map((actor) => (
                    <Grid key={`actor-${actor.mal_id}`} item sm={12} md={6}>
                      <PersonCard
                        imageUrl={actor.image_url}
                        title={actor.name}
                        subtitle={actor.language}
                      />
                    </Grid>
                  ))}
                </Grid>
              </InformationBlock>
            )}
          </div>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default connector(withStyles(styles)(withWidth()(AnimeContainer)));
