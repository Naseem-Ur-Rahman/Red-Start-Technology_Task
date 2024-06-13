import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">Red Technology Task <span className='author-name'> By Naseem Ur Rahman</span></div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Tasks</Link>
        <Link to="/todo/addedit" className="nav-link">Create Task</Link>
      </div>
    </div>
  );
};

export default Topbar;
