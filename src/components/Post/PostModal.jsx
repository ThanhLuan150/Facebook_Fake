import React, { useState } from "react";
import "../../styles/PostModal.css";

const PostModal = ({ isOpen, onClose, onPost ,setModalOpen }) => {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const resetData =() =>{
    if (isOpen){
        setContent('');
        setImage('')
        setModalOpen(false)
    }
 }
  if (!isOpen) return null;
  

  const handleSubmit = () => {
    const newPost = {
      videoUrl: image,
      content: content,
      user: "You", 
      imageUrl:'https://scontent.fdad3-5.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=A9yMFZhP9ooQ7kNvgFFxsXs&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AdZPsl1-lwr_XSomyZRoy8O&oh=00_AYApB8YbdFSqUTSr_LoeTCuByk9FM7zv-HwvzpNJylIQ7w&oe=672CB87A',
      time: new Date().toLocaleTimeString(), 
      likes: 0,
      comments: [],
    };
    
    onPost(newPost); 
    setImage(null);
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Post</h2>
        <input type="file" accept="image/*" onChange={
            handleFileChange} />
        {image && <img src={image} alt="Selected" className="preview" />}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
        />
        <div style={{ display: 'flex', gap: 20 }}>
          <button onClick={handleSubmit}>Post</button>
          <button onClick={resetData}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
