import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { TPopularAnimeListItem } from "../../interfaces/IAnime";
import Link from "../Link/Link";
import { ROUTE_PATHS, getRoutePathWithParam } from "../../routes";

import styles from "./PopularCard.styles";

interface IProps extends WithStyles<typeof styles> {
  anime: TPopularAnimeListItem;
}

const PopularCard: React.FC<IProps> = ({
  classes,
  anime: { mal_id, title, image_url, rank, members },
}) => {
  return (
    <Card>
      <CardActionArea tabIndex={-1}>
        <Link
          className={classes.link}
          href={ROUTE_PATHS.anime}
          as={getRoutePathWithParam(ROUTE_PATHS.anime, { id: mal_id })}
          underline="none"
        >
          <CardMedia className={classes.media} image={image_url} title={title} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <div className={classes.members} title="members">
              <Icon className={classes.icon}>people</Icon>
              <Typography variant="body1">{members}</Typography>
            </div>
          </CardContent>
          <div className={classes.rank}>{rank}</div>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(PopularCard);
