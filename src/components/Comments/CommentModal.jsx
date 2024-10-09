// CommentModal.js
import React, { useState } from "react";
import "../../styles/Comment.css"; 

const CommentModal = ({ isOpen, onClose, onSubmit ,imageUrl ,setModalOpen}) => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (comment) {
      onSubmit({ comment, image: imageUrl });
      setComment(""); 
      onClose(); 
    }
  };
 const resetData =() =>{
    if (isOpen){
        setComment('');
        setModalOpen(false)
    }
 }
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add a Comment</h2>
        <div style={{ paddingRight: 20 }}>
            <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment here..."
            />
        </div>
     
        <div className="modal-actions">
          <button className="button2" onClick={handleSubmit}>Send</button>
          <button onClick={resetData}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
