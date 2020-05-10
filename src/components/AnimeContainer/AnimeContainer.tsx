import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import withWidth, { WithWidth, isWidthDown, isWidthUp } from "@material-ui/core/withWidth";
import { MapStateToProps, connect, ConnectedProps } from "react-redux";
import { IState } from "../../redux/interfaces/IState";
import { IAnime } from "../../interfaces/IAnime";
import PageContainer from "../PageContainer/PageContainer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ShortInformationBlock from "../ShortInformationBlock/ShortInformationBlock";
import { joinGenres } from "../../utils/anime";
import InformationBlock from "../InformationBlock/InformationBlock";
import ResponsiveVideo from "../ResponsiveVideo/ResponsiveVideo";
import Link from "../Link/Link";
import MultilineText from "../MultilineText/MultilineText";
import PersonCard from "../PersonCard/PersonCard";
import { ROUTE_PATHS, getRoutePathWithParam } from "../../routes";
import { ISearchFilters } from "../../redux/modules/search/ISearchFilters";
import { useRouter } from "next/router";

import styles from "./AnimeContainer.styles";

interface IStateToProps {
  anime: IAnime;
}

const mapStateToProps: MapStateToProps<IStateToProps, {}, IState> = (state) => ({
  anime: state.anime.currentAnime.data,
});

const connector = connect(mapStateToProps);

interface IProps extends ConnectedProps<typeof connector>, WithStyles<typeof styles>, WithWidth {}

const AnimeContainer: React.FC<IProps> = ({ classes, anime, width }) => {
  const router = useRouter();

  const {
    image_url,
    title,
    title_english,
    title_japanese,
    type,
    episodes,
    genres,
    duration,
    rating,
    synopsis,
    trailer_url,
    url,
    background,
    characters,
  } = anime;

  const search = React.useCallback(
    (filters: ISearchFilters) => {
      router.push({ pathname: ROUTE_PATHS.search, query: { ...filters } });
    },
    [router]
  );

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
              <img src={image_url} alt={title} />
            </div>

            <ShortInformationBlock
              title={"Alternative Titles"}
              info={{
                ["English"]: title_english,
                ["Japanese"]: title_japanese,
              }}
            />

            <ShortInformationBlock
              title={"Information"}
              info={{
                ["Type"]: type,
                ["Episodes"]: episodes,
                ["Genres"]: joinGenres(genres),
                ["Duration"]: duration,
                ["Rating"]: rating,
              }}
            />

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

            <InformationBlock title={"Synopsis"}>
              <Typography gutterBottom variant="body1">
                <MultilineText text={synopsis} />
              </Typography>
            </InformationBlock>

            {background && (
              <InformationBlock title={"Background"}>
                <Typography gutterBottom variant="body1">
                  <MultilineText text={background} />
                </Typography>
              </InformationBlock>
            )}

            <InformationBlock title={"Trailer"}>
              <ResponsiveVideo src={trailer_url} />
            </InformationBlock>

            {characters && (
              <InformationBlock title={"Characters"}>
                <Grid container spacing={2}>
                  {characters.map((character) => (
                    <Grid key={`character-${character.mal_id}`} item sm={12} md={6}>
                      <PersonCard
                        imageUrl={character.image_url}
                        title={character.name}
                        subtitle={character.role}
                        href={ROUTE_PATHS.character}
                        as={getRoutePathWithParam(ROUTE_PATHS.character, { id: character.mal_id })}
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
