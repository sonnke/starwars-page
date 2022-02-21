import React from 'react';
import styled from 'styled-components';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const StyledIconButton = styled(IconButton)`&&{
    padding: 10px;
}`

const StyledInputBase = styled(InputBase)`&&{
  margin-left: 1px;
  flex-grow: 1;
}`

const StyledDevider = styled(Divider)`&&{
  height: 28px;
  margin: 4px;
}`

const StyledPaper = styled(Paper)`&&{
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 340px;
}`

interface SearchBarProps {
  onSearch: (event: React.BaseSyntheticEvent) => void;
  onClear: (event: React.BaseSyntheticEvent) => void;
  show?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onClear, show }) => {
  return (
    <StyledPaper component="form" onReset={onClear} onSubmit={onSearch} style={{ display: show ? 'flex' : 'none' }}>
      <StyledInputBase
        placeholder="Search "
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <StyledIconButton type="submit" aria-label="search">
        <SearchIcon />
      </StyledIconButton>
      <StyledDevider orientation="vertical" />
      <StyledIconButton type='reset' color="primary" aria-label="directions">
        <CloseIcon />
      </StyledIconButton>
    </StyledPaper>
  );
}

export default SearchBar;