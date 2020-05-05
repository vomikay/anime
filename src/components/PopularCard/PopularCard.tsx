import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { IAnime } from "../../interfaces/IAnime";

import styles from "./PopularCard.styles";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";

interface IProps extends WithStyles<typeof styles> {
  anime: IAnime;
}

const PopularCard: React.FC<IProps> = ({ classes, anime: { title, image_url } }) => {
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image_url} title={title} />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(PopularCard);
