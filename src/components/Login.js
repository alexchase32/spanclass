import React, { useState } from "react";
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    // make a post request to your authentication route
    axios.post('/api/auth', { username, password })
      .then(res => {
        // handle successful login here, usually by setting some sort of session
        console.log(res.data);
      })
      .catch(err => {
        // handle error here
        console.log(err);
      });
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
