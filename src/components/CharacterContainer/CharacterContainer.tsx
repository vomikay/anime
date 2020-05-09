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

import styles from "./CharacterContainer.styles";
import Link from "../Link/Link";

interface IStateToProps {
  character: ICharacter;
}

const mapStateToProps: MapStateToProps<IStateToProps, {}, IState> = (state) => ({
  character: state.character.currentCharacter.data,
});

const connector = connect(mapStateToProps);

interface IProps extends ConnectedProps<typeof connector>, WithStyles<typeof styles>, WithWidth {}

const AnimeContainer: React.FC<IProps> = ({ classes, character, width }) => {
  const { image_url, member_favorites, url, name, name_kanji, about } = character;

  return (
    <PageContainer>
      <Grid container spacing={3}>
        <Grid item sm={12} md={4}>
          <div className={classes.contentContainer}>
            {isWidthDown("sm", width) && (
              <Typography gutterBottom variant="h6" component="h1" align="center">
                {`${name} (${name_kanji})`}
              </Typography>
            )}

            <div className={classes.titleImage}>
              <img src={image_url} alt={name} />
            </div>

            <Typography gutterBottom variant="body1" align="center">
              {`Member Favorites: ${member_favorites}`}
            </Typography>

            <div className={classes.sourceLink}>
              <Link href={url} target="_blank" variant="body1" color="textSecondary">
                View on MyAnimeList.net
              </Link>
            </div>
          </div>
        </Grid>

        <Grid item sm={12} md={8}>
          <div className={classes.contentContainer}>
            {isWidthUp("sm", width) && (
              <Typography gutterBottom variant="h6" component="h1">
                {`${name} (${name_kanji})`}
              </Typography>
            )}

            <InformationBlock title={"About"}>
              <Typography gutterBottom variant="body1">
                {about}
              </Typography>
            </InformationBlock>
          </div>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default connector(withStyles(styles)(withWidth()(AnimeContainer)));
