import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';
import Pagination from '@material-ui/lab/Pagination';

import Container from '../components/container/container';
import SearchBar from '../components/input/searchbar';
import PeopleList from '../components/list/people.list';
import { getPeople, getPeopleByName, setPersonState } from '../store/people/actions/people.actions';
import { Person } from '../store/people/types/types';
import { getInitials } from '../utils/general.utils';
import PersonView from './person';

const Body = styled.div`&&{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: arial;
}`;

const Header = styled.h1<{ show: boolean }>`&&{
  display: ${({ show }) => show ? 'block' : 'none'};
  font-family: arial;
  font-size: 24px;
}`

const AvatarContainer = styled.div`&&{
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}`;

const StyledAvatar = styled(Avatar)`&&{
  height: 60px;
  width: 60px;
}`


const PeopleView: React.FC<{}> = () => {
  const [page, setPage] = useState<number>(1);

  const dispatch = useDispatch();
  const { person, count, loading, error } = useSelector((state: any) => state.people);

  useEffect(() => {
    dispatch(getPeople(1));
  }, [dispatch])

  const onPaginate = (event: React.BaseSyntheticEvent) => {
    const buttonValue = parseInt(event.target.innerText);
    setPage(buttonValue);
    dispatch(getPeople(buttonValue));
  }

  const onSelectedPerson = (person: Person) => {
    dispatch(setPersonState(person));
  }

  const onClose = (event: React.MouseEvent) => {
    dispatch(setPersonState(undefined));
  }

  const onClear = (event: any) => {
    if (!isEmpty(event.target[0].value)) {
      event.preventDefault();
      event.target[0].value = '';
      setPage(1);
      dispatch(getPeople(1));

    }

  }
  const onSearch = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    const keyword = event.target[0].value;
    if (!isEmpty(keyword)) {
      dispatch(getPeopleByName(keyword));
    }
  }

  const headerContent = person ? person.name : ' May the force be with you!';
  const isPersonSet = !isEmpty(person) ? true : undefined;
  const justify = (count && count > 1) || person || loading || error ? 'space-between' : 'flex-start';

  return (
    <Body>
      <Container md={8} lg={6} item container justifyContent={justify}>
        <AvatarContainer>
          {isPersonSet && (<StyledAvatar sizes='large'>{getInitials(person.name)}</StyledAvatar>)}
          <Header show={(isEmpty(count) && count > 1) || person}>{headerContent}</Header>
          <SearchBar show={!isPersonSet} {...{ onClear, onSearch }} />
        </AvatarContainer>

        {!person ? (<>
          <PeopleList
            getPersonState={onSelectedPerson}
          />
          <Pagination
            style={{ display: count > 1 ? 'block' : 'none' }}
            count={count}
            color="secondary"
            defaultValue={page}
            page={page}
            onChange={onPaginate}
            hidePrevButton
            hideNextButton
          />
        </>) :
          <PersonView {...{ ...person, onClose }} />
        }

      </Container>
    </Body>
  );
}

export default PeopleView;
