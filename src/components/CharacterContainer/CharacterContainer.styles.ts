import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = (theme: Theme) =>
  createStyles({
    contentContainer: {
      height: "100%",
      border: `1px solid ${theme.palette.grey[200]}`,
      borderTopWidth: 0,
      borderBottomWidth: 0,
      padding: "0 15px",
    },
    titleImage: {
      textAlign: "center",
      marginBottom: 15,
    },
    sourceLink: {
      textAlign: "center",
    },
  });

export default styles;
