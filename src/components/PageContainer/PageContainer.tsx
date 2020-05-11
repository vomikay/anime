import React from "react";
import Header from "../Header/Header";
import Container from "@material-ui/core/Container";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { ISearchFilters, SearchBy } from "../../redux/modules/search/ISearchFilters";

import styles from "./PageContainer.styles";

interface IProps extends WithStyles<typeof styles> {
  searchInitialValues?: Partial<ISearchFilters>;
  onSearch: (phrase: string, searchBy: SearchBy) => void;
}

const PageContainer: React.FC<IProps> = ({ classes, children, searchInitialValues, onSearch }) => {
  return (
    <>
      <Header searchInitialValues={searchInitialValues} onSearch={onSearch} />
      <Container className={classes.container} maxWidth="md">
        {children}
      </Container>
    </>
  );
};

export default withStyles(styles)(PageContainer);
