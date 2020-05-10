import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { ISearchFilters, SearchBy } from "../../redux/modules/search/ISearchFilters";
import { update, $merge } from "qim";

import styles from "./SearchInput.styles";

interface IProps extends WithStyles<typeof styles> {
  initialFilters?: Partial<ISearchFilters>;
  onSearch: (filters: ISearchFilters) => void;
}

const defaultInitialFilters: ISearchFilters = {
  phrase: "",
  searchBy: SearchBy.ANIME,
};

const SearchInput: React.FC<IProps> = ({ classes, initialFilters, onSearch }) => {
  const filters: ISearchFilters = initialFilters
    ? update([$merge(initialFilters)], defaultInitialFilters)
    : defaultInitialFilters;
  const [phrase, setPhrase] = React.useState(filters.phrase);
  const [searchBy] = React.useState(filters.searchBy);

  const handleChangePhrase = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPhrase(event.target.value);
    },
    [setPhrase]
  );

  const handlePressEnter = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
        onSearch({ phrase, searchBy });
      }
    },
    [phrase, searchBy, onSearch]
  );

  const handleClickSearchButton = React.useCallback(() => {
    onSearch({ phrase, searchBy });
  }, [phrase, searchBy, onSearch]);

  return (
    <Paper className={classes.root} elevation={0}>
      <InputBase
        className={classes.input}
        value={phrase}
        onChange={handleChangePhrase}
        onKeyPress={handlePressEnter}
        placeholder="Search..."
      />
      <IconButton className={classes.iconButton} onClick={handleClickSearchButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default withStyles(styles)(SearchInput);
