import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { IAnime } from "../../interfaces/IAnime";

import styles from "./PopularCard.styles";

interface IProps extends WithStyles<typeof styles> {
  anime: IAnime;
}

const PopularCard: React.FC<IProps> = ({ classes, anime: { title, image_url, rank, members } }) => {
  return (
    <Card>
      <CardActionArea className={classes.root}>
        <CardMedia className={classes.media} image={image_url} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <div className={classes.members} title="members">
            <Icon className={classes.icon}>people</Icon>
            <Typography variant="body1">{members}</Typography>
          </div>
        </CardContent>
        <div className={classes.rank}>{rank}</div>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(PopularCard);
