import { get } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ErrorOutlineSharpIcon from '@material-ui/icons/ErrorOutlineSharp';

import { Person } from '../../store/people/types/types';
import { getInitials } from '../../utils/general.utils';

const StyledList = styled(List)`&{
  width: 100%;
  margin-top: 30px !important;
}`

const StyledError = styled.div`&&{
  display: flex;
  flex-direction: column;
  align-items: center;
}`

const Error = styled.p`&&{
  font-family: arial;
  text-transform: capitalize;
}`
export interface PeopleListProps {
  getPersonState: (person: Person) => void;
}

const PeopleList: React.FC<PeopleListProps> = ({ getPersonState }) => {

  const { results, loading, error } = useSelector((state: any) => state.people);
  if (loading) {
    return <>
      <p>Loading...</p>
      <br />
    </>
  };
  if (error) {
    const msg = get(error, 'message', 'Something went wrong');
    return (
      <>
        <StyledError>
          <ErrorOutlineSharpIcon fontSize='large' />
          <Error>{msg}</Error>
        </StyledError>
        <br />
      </>

    )
  };

  const onClick = (person: Person) => {
    getPersonState(person);
  }

  return (
    <>
      <StyledList dense>
        {results.map((x: Person, index: number) => (
          (<div key={index}>
            <ListItem key={index + 2} button onClick={() => onClick(x)}>
              <ListItemAvatar>
                <Avatar>{getInitials(x.name)}</Avatar>
              </ListItemAvatar>
              <ListItemText id={`checkbox-list-secondary-label-${x.name}`} primary={x.name} />
            </ListItem>
            <Divider key={index + 1} variant="inset" component="li" />
          </div>
          )
        ))}
      </StyledList>
      <br />
    </>
  )

}

export default PeopleList