import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { Person } from '../store/people/types/types';

const StyledGrid = styled.div`&&{
  display: grid;
  grid: auto / auto auto;
  grid-gap: 30px;
  padding: 10px;
}`

const Header = styled.div`&&{
  font-weight: bold;
  overflow-wrap: anywhere;

}`
const Item = styled.div`&&{
  overflow-wrap: anywhere;
}`

interface PersonViewProps extends Person {
  onClose: (event: React.MouseEvent) => void;
}

const PersonView: React.FC<PersonViewProps> = (props) => {

  return (
    <>
      <StyledGrid>
        <Header>Name</Header>
        <Item>{props.name}</Item>

        <Header>Mass</Header>
        <Item>{props.mass}</Item>

        <Header>Height</Header>
        <Item>{props.height}</Item>

        <Header>Gender</Header>
        <Item>{props.gender}</Item>

        <Header>Homeworld</Header>
        <Item><a target="__blank" href={props.homeworld}>{props.homeworld}</a></Item>
      </StyledGrid>
      <Button variant="outlined" onClick={props.onClose}>
        Close
      </Button>
    </>
  );
}

export default PersonView;