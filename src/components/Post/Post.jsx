import React, { useState } from "react";
import "../../styles/Post.css";
import CommentModal from "../Comments/CommentModal";

const Post = ({ post, onNewPost }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments || []);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = ({ comment, image }) => {
    setComments([...comments, { user: "You", text: comment, image }]);
  };
  

  return (
    <div className="post-container">
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        {post.imageUrl && (
          <img className="image" src={post.imageUrl} alt="Post content" />
        )}
        <div className="user-info-container">
          <div className="user-info">{post.user}</div>
          <span className="timestamp">{post.time}</span>
        </div>
      </div>

      {post.content && <p className="content">{post.content}</p>}
      {post.videoUrl && (
        <img className="video" src={post.videoUrl} alt="Video content" />
      )}
      <div className="likes">{likes} Likes</div>
      <br />
      <div className="button-container">
        <button
          className={`button ${isLiked ? "liked" : ""}`}
          onClick={handleLike}
        >
          <i className="fas fa-thumbs-up"></i> {isLiked ? "Like" : "Like"}
        </button>
        <button className="button" onClick={() => setModalOpen(true)}>
          <i className="fas fa-comment"></i> Comment
        </button>
        <button className="button">
          <i className="fas fa-share"></i> Share
        </button>
      </div>

      {comments.length > 0 && (
        <div className="comments-container">
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              {comment.image && (
                <img
                  className="user-image"
                  src={comment.image}
                  alt={`${comment.user}'s profile`}
                />
              )}
              <div className="comment-text">
                <strong style={{ color: '#000000' }}>{comment.user}:</strong> {comment.comment}
              </div>
            </div>
          ))}
        </div>
      )}

      <CommentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleCommentSubmit}
        setModalOpen={setModalOpen}
        imageUrl="https://scontent.fdad3-5.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=A9yMFZhP9ooQ7kNvgFFxsXs&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AdZPsl1-lwr_XSomyZRoy8O&oh=00_AYApB8YbdFSqUTSr_LoeTCuByk9FM7zv-HwvzpNJylIQ7w&oe=672CB87A" 
      />
    </div>
  );
};

export default Post;
