import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: 'linear-gradient(to right, #4F46E5, #A55EEA)', padding: '20px', boxShadow: '0px 2px 1px 0px rgba(221, 212, 212, 0.514)' }} className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><i style={{ fontSize: "30px" }} className="fa-solid fa-ghost"></i></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{display:'none'}}>
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
