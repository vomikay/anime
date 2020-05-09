import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Link from "../Link/Link";
import { ROUTE_PATHS } from "../../routes";

import styles from "./Header.styles";

interface IProps extends WithStyles<typeof styles> {}

const Header: React.FC<IProps> = ({ classes }) => {
  return (
    <AppBar className={classes.root} position="sticky">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Link href={ROUTE_PATHS.index} variant="h6" color="inherit" underline="none">
            Anime
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
