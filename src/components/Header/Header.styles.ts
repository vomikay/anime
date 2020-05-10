import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.common.white,
    },
    innerContainer: {
      padding: theme.spacing(0, 2),
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      marginRight: theme.spacing(2),
    },
  });

export default styles;
