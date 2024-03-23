import React, { useState } from 'react';
import "./Sign.css";
import { useNavigate } from 'react-router-dom';

const Sign = () => {
    const navigate = useNavigate();
    const [condition, setCondition] = useState({ name: "", email: "", password: "", cpassword: "" });
    const [error, setError] = useState("");

    const headerFunction = (e) => {
        setCondition({ ...condition, [e.target.name]: e.target.value });
    };

    const clickHere = async (e) => {
        e.preventDefault();

        if (condition.password !== condition.cpassword) {
            setError('Password does not match');
            return;
        }

        try {
            const required = await fetch("http://localhost:5000/api/Sigin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: condition.name,
                    email: condition.email,
                    password: condition.password
                })
            });

            if (!required.ok) {
                const errorData = await required.json();
                throw new Error(errorData.error);
            }

            navigate('/ThankU');
            setError("");
            setCondition({ name: "", email: "", password: "", cpassword: "" });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="login-container">
                    <h2>Welcome</h2>
                    <form onSubmit={clickHere} className="login-form">
                        <div className="input-group">
                            <input placeholder="Name" type="text" id="name" name="name" value={condition.name} onChange={headerFunction} required />
                            <label htmlFor="name">Full name</label>
                        </div>
                        <div className="input-group">
                            <input placeholder="john@example.com" type="email" id="email" name="email" value={condition.email} onChange={headerFunction} required />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="input-group">
                            <input placeholder="Password" type="password" id="password" name="password" value={condition.password} onChange={headerFunction} required />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-group">
                            <input placeholder="Confirm Password" type="password" id="cpassword" name="cpassword" value={condition.cpassword} onChange={headerFunction} required />
                            <label htmlFor="cpassword">Confirm Password</label>
                        </div>
                        {error && <div className='alert' style={{ color: 'red' }}>{error}</div>}
                        <button className="submit" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign;
