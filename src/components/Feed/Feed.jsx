import React from 'react';
import Post from '../Post/Post';
import Story from '../Stori/Story';
import { stories, posts } from '../../data/fakeData';
import MainComponent from '../Post/MainPost';
import '../../styles/Feed.css'; 

const Feed = () => {
  return (
    <div className="feed-container">
      <Story stories={stories} />
      <MainComponent/>
      <br />
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
