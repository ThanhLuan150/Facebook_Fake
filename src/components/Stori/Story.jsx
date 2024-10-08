import React, { useState } from 'react';
import '../../styles/Story.css';

const Story = ({ stories }) => {
  const [newStoryImage, setNewStoryImage] = useState(null);
  const [newStoryUser, setNewStoryUser] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewStoryImage(reader.result);
        setIsModalOpen(true); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReplaceImage = () => {
    document.getElementById("fileInput").click();
  };

  const handleSubmit = () => {
    if (newStoryImage) {
      const newStory = {
        user: newStoryUser || "Tôi",
        imageUrl: newStoryImage,
        image: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=A9yMFZhP9ooQ7kNvgFFxsXs&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AdZPsl1-lwr_XSomyZRoy8O&oh=00_AYApB8YbdFSqUTSr_LoeTCuByk9FM7zv-HwvzpNJylIQ7w&oe=672CB87A',
      };

      stories.push(newStory);
      setNewStoryImage(null);
      setNewStoryUser("");
      setIsModalOpen(false);
    }
  };

  return (
    <div className="story-container">
      <button className="create-story-button" onClick={() => document.getElementById("fileInput").click()}>
        <i className="create-story-icon fas fa-plus"></i>
        Tạo tin
      </button>

      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept="image/*"
      />

      {stories.map(story => (
        <div className="story-box" key={story.id}>
          <img className="story-image" src={story.imageUrl} alt={`${story.user}'s story`} />
          <img className="user-avatar" src={story.image} alt={`${story.user}'s avatar`} />
          <span className="user-name">{story.user}</span>
        </div>
      ))}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Xem trước câu chuyện</h2>
            <img className="modal-image" src={newStoryImage} alt="Preview" />
            <div>
              <button className="modal-button" onClick={handleReplaceImage}>Thay thế ảnh</button>
              <button className="modal-button" onClick={handleSubmit}>Đăng câu chuyện</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;
