import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../api/redditSlice';
import subredditsReducer from '../components/Subreddits/subredditsSlice';

const store = configureStore({
  reducer: {
    reddit: redditReducer,
    subreddits: subredditsReducer
  }
});

export default store;