import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "../Link/Link";

import styles from "./SimpleCard.styles";

interface IProps extends WithStyles<typeof styles> {
  title: string;
  imageUrl: string;
  href?: string;
  as?: string;
  subtitle?: string;
}

type TLinkWrapperProps = Pick<IProps, "href" | "as"> & {
  className: string;
};

const LinkCardWrapper: React.FC<TLinkWrapperProps> = ({ className, children, href, as }) => {
  return href ? (
    <CardActionArea tabIndex={-1}>
      <Link className={className} href={href} as={as} underline="none">
        {children}
      </Link>
    </CardActionArea>
  ) : (
    <div className={className}>{children}</div>
  );
};

const SimpleCard: React.FC<IProps> = ({ classes, title, subtitle, imageUrl, href, as }) => {
  return (
    <Card>
      <LinkCardWrapper className={classes.link} href={href} as={as}>
        <CardMedia className={classes.media} image={imageUrl} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          {subtitle && (
            <Typography gutterBottom variant="subtitle1" color="textPrimary">
              {subtitle}
            </Typography>
          )}
        </CardContent>
      </LinkCardWrapper>
    </Card>
  );
};

export default withStyles(styles)(SimpleCard);
