import { configureStore } from '@reduxjs/toolkit';

import peopleReducer from './people/reducers/index';

export default configureStore({
  reducer: {
    people: peopleReducer
  }
})