import React, { useState } from "react";
import "../../styles/PostModal.css";
import PostModal from './PostModal';
import Post from './Post'; 

const MainComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([]); 

  const handlePost = (newPost) => {
    setPosts([...posts, newPost]); 
  };

  return (
    <div>
   
   <button className="button1" onClick={() => setModalOpen(true)}>
      <i className="fas fa-pencil-alt"></i> What's on your mind?
    </button>
    <br></br>
    <PostModal
      isOpen={modalOpen}
      onClose={() => setModalOpen(false)}
      onPost={handlePost}
      setModalOpen={setModalOpen}
    />
    <div className="posts-container">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  </div>
  );
};

export default MainComponent;
