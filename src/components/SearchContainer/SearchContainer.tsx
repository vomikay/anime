import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import PageContainer from "../PageContainer/PageContainer";
import Grid from "@material-ui/core/Grid";
import { MapStateToProps, connect, ConnectedProps, MapDispatchToProps } from "react-redux";
import { IState } from "../../redux/interfaces/IState";
import { ISearchFilters, SearchBy } from "../../redux/modules/search/ISearchFilters";
import * as searchActions from "../../redux/modules/search/impl/SearchActions";
import Pagination from "@material-ui/lab/Pagination";
import { TChangeSearchFiltersActionCreator } from "../../redux/modules/search/ISearchActions";

import styles from "./SearchContainer.styles";

interface IStateToProps {
  results: object[];
  pageCount: number;
  filters: ISearchFilters;
}

interface IDispatchToProps {
  changeFilters: TChangeSearchFiltersActionCreator;
}

const mapStateToProps: MapStateToProps<IStateToProps, {}, IState> = (state) => ({
  results: [],
  pageCount: 20,
  filters: state.search.filters,
});

const mapDispatchToProps: MapDispatchToProps<IDispatchToProps, {}> = {
  changeFilters: searchActions.changeFilters,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface IProps extends ConnectedProps<typeof connector>, WithStyles<typeof styles> {}

const SearchContainer: React.FC<IProps> = ({
  classes,
  results,
  pageCount,
  filters,
  changeFilters,
}) => {
  const { phrase, searchBy, page } = filters;

  const search = React.useCallback(
    (phrase: string, searchBy: SearchBy) => {
      changeFilters({ ...filters, phrase, searchBy });
    },
    [filters, changeFilters]
  );

  const handleChangePage = React.useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => {
      changeFilters({ ...filters, page });
    },
    [filters, changeFilters]
  );

  return (
    <PageContainer searchInitialValues={{ phrase, searchBy }} onSearch={search}>
      <Grid container spacing={4}>
        {results.map((item, index) => (
          <Grid key={`result-${index}`} item xs={12} sm={6}></Grid>
        ))}
      </Grid>
      <Grid container spacing={4} justify="center">
        <Grid className={classes.pagination} item xs={12}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChangePage}
            siblingCount={0}
            boundaryCount={1}
            color="primary"
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default connector(withStyles(styles)(SearchContainer));
