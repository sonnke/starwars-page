import { peopleActionEnum } from '../actions/people.actions.enum';
import { People } from '../types/types';

const initState: People = {
  results: [],
  count: 0,
  person: undefined,
  loading: false,
  error: undefined
};

export default function defaultReducer(
  state = initState,
  action: any
): People {
  switch (action.type) {
    case peopleActionEnum.GET_PERSON_BY_NAME:
    case peopleActionEnum.GET_ALL_PEOPLE: {
      const { results, count } = action.payload;
      return {
        ...state,
        results,
        count: Math.round(count / 10),
        loading: false,
        error: undefined
      };
    }

    case peopleActionEnum.SET_PERSON_STATE: {
      return {
        ...state,
        person: action.payload,
        loading: false,
        error: undefined
      };
    }

    case peopleActionEnum.ERROR: {
      return {
        ...state,
        person: undefined,
        results: [],
        count: 0,
        loading: false,
        error: action.payload
      };
    }

    case peopleActionEnum.LOADING: {
      return {
        ...state,
        person: undefined,
        results: [],
        count: 0,
        loading: action.payload,
        error: undefined
      };
    }

    default: {
      break;
    }
  }
  return state;
}
