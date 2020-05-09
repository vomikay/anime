import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
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

import styles from "./AnimeContainer.styles";

interface IStateToProps {
  anime: IAnime;
}

const mapStateToProps: MapStateToProps<IStateToProps, {}, IState> = (state) => ({
  anime: state.anime.currentAnime.data,
});

const connector = connect(mapStateToProps);

interface IProps extends ConnectedProps<typeof connector>, WithStyles<typeof styles> {}

const AnimeContainer: React.FC<IProps> = ({ classes, anime }) => {
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
    background,
  } = anime;

  return (
    <PageContainer>
      <Grid container spacing={3}>
        <Grid item sm={12} md={4}>
          <div className={classes.contentContainer}>
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
          </div>
        </Grid>
        <Grid item sm={12} md={8}>
          <div className={classes.contentContainer}>
            <Typography gutterBottom variant="h4" component="h1">
              {title}
            </Typography>

            <InformationBlock title={"Synopsis"}>
              <Typography gutterBottom variant="body1">
                {synopsis}
              </Typography>
            </InformationBlock>

            {background && (
              <InformationBlock title={"Background"}>
                <Typography gutterBottom variant="body1">
                  {background}
                </Typography>
              </InformationBlock>
            )}

            <InformationBlock title={"Trailer"}>
              <ResponsiveVideo src={trailer_url} />
            </InformationBlock>
          </div>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default connector(withStyles(styles)(AnimeContainer));
