// Imports
/////////////////////////////////////////////
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Animate from 'rc-animate';
import { Alert, Button } from 'antd';
//
import Post from '../Post';
import PostLoading from '../PostLoading';
import getRandomNumber from '../../helpers/shortenNumber/shortenNumber';
import {
  selectIsLoading,
  selectError,
  selectSearchTerm,
  selectSelectedSubreddit,
  fetchPosts,
  selectFilteredPosts,
  setSearchTerm,
  fetchComments
} from '../../api/redditSlice';
import './Main.css';

// Function Component
/////////////////////////////////////////////
const Main = () => {
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectError);
  const searchTerm = useSelector(selectSearchTerm);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);

  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink));
    };
    return getComments;
  };

  const randomArray = Array(getRandomNumber(3, 10)).fill(null);

  if (isLoading) {
    const skeletonPosts = randomArray.map((post, index) => {
      return (
        <PostLoading key={index} className='posts' />
      );      
    });
    return (
      <div className='posts'>
        {skeletonPosts}
      </div>
    )
  };

  if (hasError) {
    return (
      <div className='error'>
        <Alert
          message='Error'
          description='Failed to load posts.'
          type='error'
          showIcon
        />
        <Button 
          onClick={() => dispatch(fetchPosts(selectedSubreddit))}
        >
          Try again
        </Button>
      </div>
    );
  };

  if (Array.isArray(posts) && posts.length === 0) {
    return (
        <div className='error'>
          <Alert
            message='Warning'
            description={`No posts matching "${searchTerm}".`}
            type='warning'
            showIcon
          />
          <Button 
            onClick={() => dispatch(setSearchTerm(''))}
          >
            Go home
          </Button>
        </div>
    );
  }

  return (
    <div className='posts'>
        {Array.isArray(posts) && posts.map((post, index) => (
          <Post
            key={post.id}
            post={post}
            onToggleComments={onToggleComments(index)}
          />
        ))}
    </div>
  );
};

export default Main;