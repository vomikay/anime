import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import Grid from "@material-ui/core/Grid";
import { MapStateToProps, MapDispatchToProps, connect, ConnectedProps } from "react-redux";
import { IState } from "../../redux/interfaces/IState";
import { IAnime } from "../../interfaces/IAnime";
import { TLoadPopularActionFunc } from "../../redux/modules/popular/IPopularActions";
import * as popularActions from "../../redux/modules/popular/impl/PopularActions";
import PopularCard from "../PopularCard/PopularCard";

interface IStateToProps {
  anime: IAnime[];
}

interface IDispatchToProps {
  loadPopular: TLoadPopularActionFunc;
}

const mapStateToProps: MapStateToProps<IStateToProps, {}, IState> = (state) => ({
  anime: state.popular.data,
});

const mapDispatchToProps: MapDispatchToProps<IDispatchToProps, {}> = {
  loadPopular: popularActions.loadPopular,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface IProps extends ConnectedProps<typeof connector> {}

const HomeContainer: React.FC<IProps> = ({ anime, loadPopular }) => {
  React.useEffect(() => loadPopular(), [loadPopular]);

  return (
    <PageContainer>
      <Grid container spacing={2}>
        {anime.map((title) => (
          <Grid key={title.mal_id} item xs={6} sm={3}>
            <PopularCard anime={title} />
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default connector(HomeContainer);
