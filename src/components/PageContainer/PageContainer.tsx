import React from "react";
import Header from "../Header/Header";
import Container from "@material-ui/core/Container";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import styles from "./PageContainer.styles";

interface IProps extends WithStyles<typeof styles> {}

const PageContainer: React.FC<IProps> = ({ classes, children }) => {
  return (
    <>
      <Header />
      <Container className={classes.container} maxWidth="md">
        {children}
      </Container>
    </>
  );
};

export default withStyles(styles)(PageContainer);
