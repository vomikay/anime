import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import styles from "./ResponsiveVideo.styles";

interface IProps extends WithStyles<typeof styles> {
  src: string;
}

const ResponsiveVideo: React.FC<IProps> = ({ classes, src }) => {
  return (
    <div className={classes.root}>
      <iframe
        className={classes.inner}
        src={`${src}&autoplay=0&rel=0`}
        frameBorder={0}
        allowFullScreen
      />
    </div>
  );
};

export default withStyles(styles)(ResponsiveVideo);
