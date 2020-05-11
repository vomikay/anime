import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import PageContainer from "../PageContainer/PageContainer";
import Grid from "@material-ui/core/Grid";
import { MapStateToProps, connect, ConnectedProps, MapDispatchToProps } from "react-redux";
import { IState } from "../../redux/interfaces/IState";
import { ISearchFilters, SearchBy } from "../../redux/modules/search/ISearchFilters";
import * as searchActions from "../../redux/modules/search/impl/SearchActions";
import { TSearchThunkActionCreator } from "../../redux/modules/search/ISearchActions";
import { TSearchItem } from "../../redux/modules/search/ISearchItem";
import { ROUTE_PATHS, getRoutePathWithParam } from "../../routes";
import SimpleCard from "../SimpleCard/SimpleCard";
import { TAnimeListItem } from "../../interfaces/IAnime";
import Typography from "@material-ui/core/Typography";
import { TCharacterListItem } from "../../interfaces/ICharacter";

import styles from "./SearchContainer.styles";

function isAnimeListItem(obj: object): obj is TAnimeListItem {
  return "title" in obj;
}

function isCharacterListItem(obj: object): obj is TCharacterListItem {
  return "name" in obj;
}

interface IStateToProps {
  results: TSearchItem[];
  pageCount: number;
  filters: ISearchFilters;
}

interface IDispatchToProps {
  search: TSearchThunkActionCreator;
}

const mapStateToProps: MapStateToProps<IStateToProps, {}, IState> = (state) => ({
  results: state.search.searchResult.data.results,
  pageCount: state.search.searchResult.data.pageCount,
  filters: state.search.filters,
});

const mapDispatchToProps: MapDispatchToProps<IDispatchToProps, {}> = {
  search: searchActions.search,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface IProps extends ConnectedProps<typeof connector>, WithStyles<typeof styles> {}

const SearchContainer: React.FC<IProps> = ({ classes, results, pageCount, filters, search }) => {
  const { phrase, searchBy } = filters;
  const route = searchBy === SearchBy.ANIME ? ROUTE_PATHS.anime : ROUTE_PATHS.character;
  const hasResults = results && !!results.length;

  return (
    <PageContainer searchInitialValues={{ phrase, searchBy }} onSearch={search}>
      <Grid container spacing={4}>
        {hasResults ? (
          results.map((item) => (
            <Grid key={`result-${item.mal_id}`} item xs={12} sm={6}>
              <SimpleCard
                title={
                  (isAnimeListItem(item) && item.title) || (isCharacterListItem(item) && item.name)
                }
                imageUrl={item.image_url}
                href={route}
                as={getRoutePathWithParam(route, { id: item.mal_id })}
              />
            </Grid>
          ))
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Sorry, we couldn't find any result
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </PageContainer>
  );
};

export default connector(withStyles(styles)(SearchContainer));
