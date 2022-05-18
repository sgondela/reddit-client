// Imports
/////////////////////////////////////////////
import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../../api/reddit';

// Slice Object
/////////////////////////////////////////////
const initialState = {
  subreddits: [],
  error: false,
  isLoading: false,
};

const subRedditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    startGetSubreddits(state) {
      state.isLoading = true;
      state.error = false;
    },
    getSubredditsSuccess(state, action) {
      state.isLoading = false;
      state.subreddits = action.payload;
    },
    getSubredditsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

// Exports
/////////////////////////////////////////////
export const {
  getSubredditsFailed,
  getSubredditsSuccess,
  startGetSubreddits,
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

// Thunks
/////////////////////////////////////////////
export const fetchSubreddits = () => async (dispatch) => {
  try {
    dispatch(startGetSubreddits());
    const subreddits = await getSubreddits();
    dispatch(getSubredditsSuccess(subreddits));
  } catch (error) {
    dispatch(getSubredditsFailed());
  }
};

// Selectors
/////////////////////////////////////////////
export const selectSubreddits = (state) => state.subreddits.subreddits;
