import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import styles from "./Header.styles";

interface IProps extends WithStyles<typeof styles> {}

const Header: React.FC<IProps> = ({ classes }) => {
  return (
    <AppBar className={classes.root} position="sticky">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography variant="h6">Anime</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
