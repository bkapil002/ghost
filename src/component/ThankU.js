import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankU = () => {
    const navigate = useNavigate();

    const handleThankYou = () => {
        localStorage.removeItem("token");
        navigate('/login');
    };

    return (
        <div>
            <div className='container' style={{
                maxWidth: "100%",
                width: "100%",
                padding: "20px",
                background: "linear-gradient(to right, #4F46E5, #A55EEA)",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center" 
            }}>

                <div className='Heading' style={{ alignItems: "center", textAlign: "center" }}>

                    <div><i style={{ fontSize: "70px" }} className="fa-solid fa-ghost" /></div>

                    <h1>Welcome ghost</h1>

                    <button onClick={handleThankYou} className='button' style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#A55EEA",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s"
                    }}>Thank You</button>

                </div>
            </div>
        </div>
    );
};

export default ThankU;
