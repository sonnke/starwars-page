import { ApolloClient, InMemoryCache } from '@apollo/client';

import { GET_PEOPLE, GET_PEOPLE_BY_NAME } from '../../../query/people.query';
import { People, Person } from '../types/types';
import { peopleActionEnum } from './people.actions.enum';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

export function getPeople(page: number): Function {
  return async function (dispatch: Function) {
    try {

      dispatch({ type: peopleActionEnum.LOADING, payload: true });
      const { loading, data, error } = await client.query({
        query: GET_PEOPLE,
        variables: {
          page
        }
      });

      if (error) {
        dispatch({ type: peopleActionEnum.ERROR, payload: error });
      }

      if (loading) {
        dispatch({ type: peopleActionEnum.LOADING, payload: true });
      }

      if (data) {
        dispatch({ type: peopleActionEnum.GET_ALL_PEOPLE, payload: data.people });
      }

    } catch (error) {
      dispatch({ type: peopleActionEnum.ERROR, payload: error });
    }
  }
}

export function getPeopleByName(name: People): Function {
  return async function (dispatch: Function) {
    try {
      dispatch({ type: peopleActionEnum.LOADING, payload: true });

      const { loading, data, errors } = await client.query({
        query: GET_PEOPLE_BY_NAME,
        variables: {
          name
        }
      });

      if (errors) {
        dispatch({ type: peopleActionEnum.ERROR, payload: errors });
      }

      if (loading) {
        dispatch({ type: peopleActionEnum.LOADING, payload: true });
      }

      if (data) {
        console.log(data);
        dispatch({ type: peopleActionEnum.GET_PERSON_BY_NAME, payload: data.person });
      }

    } catch (error: any) {
      dispatch({ type: peopleActionEnum.ERROR, payload: error.message });
    }

  };
}



export function setPersonState(data?: Person): Function {
  return function (dispatch: Function) {
    dispatch({ type: peopleActionEnum.SET_PERSON_STATE, payload: data });
  };
}