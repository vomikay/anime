import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import { fade } from "@material-ui/core/styles/colorManipulator";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 300,
      color: theme.palette.common.white,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      ["&:focus-within"]: {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
    },
    input: {
      marginLeft: theme.spacing(1),
      color: theme.palette.common.white,
      flex: 1,
    },
    iconButton: {
      padding: 5,
      color: theme.palette.common.white,
    },
  });

export default styles;
