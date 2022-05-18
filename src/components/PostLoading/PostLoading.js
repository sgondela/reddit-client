import React from 'react';
import { Skeleton, Card, Avatar } from 'antd';

const PostLoading = () => {
  const { Meta } = Card;
  return (
    <Card style={{ width: '85%', margin: 16, maxWidth: 900 }}>
      <Skeleton avatar active>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </Card>
  )
};

export default PostLoading;