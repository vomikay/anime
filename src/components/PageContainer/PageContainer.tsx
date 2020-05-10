import React from "react";
import Header from "../Header/Header";
import Container from "@material-ui/core/Container";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { ISearchFilters } from "../../redux/modules/search/ISearchFilters";

import styles from "./PageContainer.styles";

interface IProps extends WithStyles<typeof styles> {
  onSearch: (filters: ISearchFilters) => void;
}

const PageContainer: React.FC<IProps> = ({ classes, children, onSearch }) => {
  return (
    <>
      <Header onSearch={onSearch} />
      <Container className={classes.container} maxWidth="md">
        {children}
      </Container>
    </>
  );
};

export default withStyles(styles)(PageContainer);
