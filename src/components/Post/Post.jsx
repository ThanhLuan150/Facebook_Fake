import React, { useState } from "react";
import "../../styles/Post.css";

const Post = ({ post, onNewPost }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments || []);
  const [isLiked, setIsLiked] = useState(false);
  const [commentInputVisible, setCommentInputVisible] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setComments([...comments, { user: "You", comment: commentText }]);
      setCommentText(""); // Clear input
      setCommentInputVisible(false); // Hide input after submitting
    }
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
          <i className="fas fa-thumbs-up"></i> {isLiked ? "Liked" : "Like"}
        </button>
        <button
          className="button"
          onClick={() => setCommentInputVisible(!commentInputVisible)}
        >
          <i className="fas fa-comment"></i> Comment
        </button>
        <button className="button">
          <i className="fas fa-share"></i> Share
        </button>
      </div>

      {commentInputVisible && (
        <div className="comment-input-container">
          <input
            type="text"
            className="comment-input"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
          />
          <button  onClick={handleCommentSubmit} className="button1">
            Post
          </button>
        </div>
      )}

      {comments.length > 0 && (
        <div className="comments-container">
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              <div className="comment-text">
                <strong>{comment.user}:</strong> {comment.comment}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
