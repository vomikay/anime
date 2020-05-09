import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import styles from "./InformationBlock.styles";

interface IProps extends WithStyles<typeof styles> {
  title: string;
}

const InformationBlock: React.FC<IProps> = ({ classes, children, title }) => {
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="body1" component="h2">
        <strong>{title}</strong>
      </Typography>
      <hr />
      {children}
    </div>
  );
};

export default withStyles(styles)(InformationBlock);
