import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      position: "relative",
    },
    media: {
      height: 225,
      width: 150,
      flexShrink: 0,
      borderRadius: 4,
    },
    rank: {
      position: "absolute",
      height: 36,
      width: 36,
      top: 0,
      right: 0,
      fontSize: 18,
      borderRadius: 4,
      lineHeight: "36px",
      textAlign: "center",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    members: {
      display: "flex",
    },
    icon: {
      marginRight: 5,
    },
  });

export default styles;
