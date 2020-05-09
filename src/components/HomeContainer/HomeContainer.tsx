import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import Grid from "@material-ui/core/Grid";
import { MapStateToProps, connect, ConnectedProps } from "react-redux";
import { IState } from "../../redux/interfaces/IState";
import { IAnimeBase } from "../../interfaces/IAnime";
import PopularCard from "../PopularCard/PopularCard";

interface IStateToProps {
  anime: IAnimeBase[];
}

const mapStateToProps: MapStateToProps<IStateToProps, {}, IState> = (state) => ({
  anime: state.anime.popular.data,
});

const connector = connect(mapStateToProps);

interface IProps extends ConnectedProps<typeof connector> {}

const HomeContainer: React.FC<IProps> = ({ anime }) => {
  return (
    <PageContainer>
      <Grid container spacing={4}>
        {anime.map((title) => (
          <Grid key={title.mal_id} item xs={12} sm={6}>
            <PopularCard anime={title} />
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default connector(HomeContainer);
