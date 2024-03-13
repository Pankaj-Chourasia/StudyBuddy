import React, { useState } from 'react';

const SignupPage = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //signup logic 
    }

    return(
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required/>
                <input type="password" placeholder= "Password" value={password} onChange={handlePasswordChange} required/>
                <button type = "submit">Sign Up</button>
            </form>
        </div>
    )
 }
 export default SignupPage;