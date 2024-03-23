import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const history = useNavigate();
    const [condition, setCondition] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const headerFunction = (e) => {
        setCondition({ ...condition, [e.target.name]: e.target.value });
    };

    const clickHere = async (e) => {
        e.preventDefault();

        const required = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: condition.email,
                password: condition.password,
            })
        });

        const json = await required.json();
        console.log(json);

        if (required.ok) {
            localStorage.setItem('token', json.token);
            history('/');
        } else {
            setError(json.error);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="login-container">
                    <h2>Welcome</h2>
                    <form onSubmit={clickHere} className="login-form">
                        <div className="input-group">
                            <input placeholder="john@example.com" type="email" id="email" name="email" value={condition.email} onChange={headerFunction} required />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="input-group">
                            <input placeholder="Password" type="password" id="password" name="password" value={condition.password} onChange={headerFunction} required />
                            <label htmlFor="password">Password</label>
                        </div>

                        {error && <div className='alert' style={{ color: 'red' }}>{error}</div>}
                        <button className="submit" type="submit">Log In</button>
                        <div className="signup-link">Don't have an account?<Link to='/sign'>Sign up</Link></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
