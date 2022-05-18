import React from 'react';
import { Skeleton, Divider } from 'antd';
import {
//   TiArrowUpOutline,
//   TiArrowUpThick,
//   TiArrowDownOutline,
//   TiArrowDownThick,
  TiMessage,
} from 'react-icons/ti';
import moment from 'moment';
import { Card } from 'antd';
import './Post.css';
import shortenNumber from '../../helpers/shortenNumber/shortenNumber';
import Comment from '../Comment/Comment';

const Post = ({ post, onToggleComments }) => {
  
  const renderComments = () => {
    if (post.errorComments) {
      return ( // add animation!
        <div>
          <h3>Error loading comments</h3>
        </div>
      );
    }

    if (post.loadingComments) {
      return (
        <div>
          <Divider />
          <Skeleton active paragraph={{ rows: 2 }} />
          <Divider />
          <Skeleton active paragraph={{ rows: 2 }} />
          <Divider />
          <Skeleton active paragraph={{ rows: 2 }} />
          <Divider />
          <Skeleton active paragraph={{ rows: 2 }} />
        </div>
      );
    }

    if (post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <Card style={{ width: '85%', margin: 16, maxWidth: 900 }}>
      <article key={post.id}>
        <div className="post-wrapper">
          <p className={`post-votes-value`}>
            {shortenNumber(post.ups, 1)}
          </p>
          <h3 className="post-title">{post.title}</h3>
          <div className="post-image-container">
            <img src={post.url} alt="" className="post-image" />
          </div>
          <Divider className='post-divider'/>
          <span className="author-username">{post.author}</span>
          <span className="post-time">{moment.unix(post.created_utc).fromNow()}</span>
          <span className="post-comments-container">
            <button
              type="button"
              className={`icon-action-button ${
                post.showingComments && 'showing-comments'
              }`}
              onClick={() => onToggleComments(post.permalink)}
              aria-label="Show comments"
            >
              <TiMessage className="icon-action" />
              <p>{shortenNumber(post.num_comments, 1)}</p>
            </button>
          </span>
        </div>
        <div className='comments'>
          {renderComments()}
        </div>
      </article>
    </Card>
  );
};

export default Post;
