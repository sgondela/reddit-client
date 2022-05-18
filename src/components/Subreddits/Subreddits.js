import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
//
import { fetchSubreddits, selectSubreddits } from './subredditsSlice';
import {
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from '../../api/redditSlice';
//
import './Subreddits.css';

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <div className="subreddit-card">
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${
              selectedSubreddit === subreddit.url && `selected-subreddit`
            }`}
          >
            <Button
              className='subreddit-button'
              type="link"
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
            >
              {subreddit.display_name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subreddits;
