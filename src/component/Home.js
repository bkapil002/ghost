import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let history = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history('/login');
    }
  }, [history]);

  return (
    <div className='container' style={{ maxWidth: "100%",
      width: "100%",
      padding: "20px",
      background: "linear-gradient(to right, #4F46E5, #A55EEA)",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"}}>
      <div className='Heading'>
        <h1>Welcome to the Home page</h1>
        <h4>Hello.....</h4>
      </div>
    </div>
  );
};

export default Home;
