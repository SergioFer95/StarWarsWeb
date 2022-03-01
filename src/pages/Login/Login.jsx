import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import anakin from './assets/images/anakinLightSaber.png';
import obiWan from './assets/images/obiWanLightSaber.png';
import anonimus from './assets/images/anonimusLightSaber.png';

export default function Login() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



  return (
    <div>
        <h1>Welcome, young padawan. 
        It is time to identify yourself:</h1>

        <img src={anakin} alt='imageLightSaberOff'/>

        <form>
            <label for="userName">User Name</label>
            <input type="text" id="userName" 
            name="userName" value={userName} 
            onChange={e => setUserName(e.target.value)}/>

            <label for="email">Email</label>
            <input type="email" id="email" 
            name="email" value={email} 
            onChange={e => setEmail(e.target.value)}/>

            <label for="password">Password</label>
            <input type="password" id="password" 
            name="password" value={password} 
            onChange={e => setPassword(e.target.value)}/>

            <Button btnContain='Login'/>
        </form>

        <img src={obiWan} alt='imageLightSaberOff'/>

        <img src={anonimus} alt='imageLightSaberOff'/>

    </div>
  )
}
