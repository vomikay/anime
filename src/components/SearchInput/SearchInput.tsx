import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import { ISearchFilters, SearchBy } from "../../redux/modules/search/ISearchFilters";

import styles from "./SearchInput.styles";

interface IProps extends WithStyles<typeof styles> {
  initialFilters?: Partial<ISearchFilters>;
  onSearch: (phrase: string, searchBy: SearchBy) => void;
}

const defaultInitialFilters: ISearchFilters = {
  phrase: "",
  searchBy: SearchBy.ANIME,
};

const options = [
  { label: "Search by anime", value: SearchBy.ANIME },
  { label: "Search by character", value: SearchBy.CHARACTER },
];

const SearchInput: React.FC<IProps> = ({ classes, initialFilters, onSearch }) => {
  const filters: ISearchFilters = initialFilters
    ? {
        phrase: initialFilters.phrase || defaultInitialFilters.phrase,
        searchBy: initialFilters.searchBy || defaultInitialFilters.searchBy,
      }
    : defaultInitialFilters;

  const [phrase, setPhrase] = React.useState(filters.phrase);
  const [searchBy, setSearchBy] = React.useState(filters.searchBy);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChangePhrase = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setPhrase(event.currentTarget.value),
    [setPhrase]
  );

  const handlePressEnter = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
        onSearch(phrase, searchBy);
      }
    },
    [phrase, searchBy, onSearch]
  );

  const handleClickSearchButton = React.useCallback(() => onSearch(phrase, searchBy), [
    phrase,
    searchBy,
    onSearch,
  ]);

  const handleClickSearchByButton = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget),
    [setAnchorEl]
  );

  const handleCloseSearchByMenu = React.useCallback(() => setAnchorEl(null), [setAnchorEl]);

  const handleClickSearchByMenuItem = React.useCallback(
    (searchBy: SearchBy) => {
      setSearchBy(searchBy);
      handleCloseSearchByMenu();
    },
    [setSearchBy, handleCloseSearchByMenu]
  );

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
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton className={classes.iconButton} onClick={handleClickSearchByButton}>
        <FilterListIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={!!anchorEl} onClose={handleCloseSearchByMenu}>
        {options.map((option) => (
          <MenuItem
            key={`search-by-${option.value}`}
            selected={option.value === searchBy}
            onClick={() => handleClickSearchByMenuItem(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Paper>
  );
};

export default withStyles(styles)(SearchInput);
