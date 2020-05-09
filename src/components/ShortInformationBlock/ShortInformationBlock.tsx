import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import styles from "./ShortInformationBlock.styles";

interface IProps extends WithStyles<typeof styles> {
  title: string;
  info: { [key: string]: string | number };
}

const ShortInformationBlock: React.FC<IProps> = ({ classes, title, info }) => {
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="body1" component="h2">
        <strong>{title}</strong>
      </Typography>
      <hr />
      {Object.entries(info).map(([subtitle, text]) => (
        <Typography key={subtitle} gutterBottom variant="body1">
          <strong>{subtitle}:</strong>
          {"\u00A0"}
          {text}
        </Typography>
      ))}
    </div>
  );
};

export default withStyles(styles)(ShortInformationBlock);
