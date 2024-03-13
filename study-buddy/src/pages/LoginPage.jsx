import React, {useState} from 'react';

const LoginPage = () =>{
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
    
        // Logic for login
    }
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder= "jenny@example.com" value={email} onChange={handleEmailChange} required/>
                <input type="email" placeholder= "Password" value={password} onChange={handlePasswordChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;

