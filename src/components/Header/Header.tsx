import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Link from "../Link/Link";
import { ROUTE_PATHS } from "../../routes";
import SearchInput from "../SearchInput/SearchInput";
import { ISearchFilters, SearchBy } from "../../redux/modules/search/ISearchFilters";

import styles from "./Header.styles";

interface IProps extends WithStyles<typeof styles> {
  searchInitialValues?: Partial<Omit<ISearchFilters, "page">>;
  onSearch: (phrase: string, searchBy: SearchBy) => void;
}

const Header: React.FC<IProps> = ({ classes, onSearch }) => {
  return (
    <AppBar className={classes.root} position="sticky">
      <Container className={classes.innerContainer} maxWidth="md">
        <Toolbar className={classes.toolbar} disableGutters>
          <Link
            className={classes.title}
            href={ROUTE_PATHS.index}
            variant="h6"
            color="inherit"
            underline="none"
          >
            Anime
          </Link>
          <SearchInput onSearch={onSearch} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
