import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { Divider, Comment as UiComment } from 'antd';
// import './Comment.css';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <Divider />
      <UiComment
        author={comment.author}
        content={<ReactMarkdown children={comment.body} />}
        datetime={moment.unix(comment.created_utc).fromNow()}
      />
    </div>
  );
};

export default Comment;