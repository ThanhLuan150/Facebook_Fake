// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Chat from './components/Chat/Chat';
import { chatUsers } from './data/fakeData';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Feed />
        <Chat users={chatUsers} />
      </div>
    </div>
  );
};

export default App;
