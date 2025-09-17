import React from 'react';
import styles from './PostItem.module.scss';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className={styles.postItem}>
      <h3 className={styles.postTitle}>{post.title}</h3>
      <p className={styles.postBody}>{post.body}</p>
      <div className={styles.postMeta}>
        Post ID: {post.id} | User ID: {post.userId}
      </div>
    </div>
  );
};

export default PostItem;