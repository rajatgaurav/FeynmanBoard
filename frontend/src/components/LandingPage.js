import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LandingPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const showTopics = async (username) => {
    let options = {
      method: "post",
      url: `http://localhost:3002/getTopics`,
      data: { username }
    }
    let res = await axios(options);
    navigate('/dashboard', {state: res.data});
  }

  return (
    <div style={{backgroundColor:'blueviolet', padding:'0px 20px 0px 20px', borderRadius: '50px'}}>
        <h1> FEYNMAN BOARD </h1>
        <input value={username} onChange={e=>setUsername(e.target.value)} style={{border:"2px solid red", width: '500px', height: '40px', borderRadius: '40px', backgroundColor: 'violet', textAlign:'center', font:'20px bold'}} placeholder='Enter the username' ></input>
        <br />


        <button onClick={()=>showTopics(username)} style={{margin:'50px', width: '220px', height:'40px', borderRadius:'20px', backgroundColor:'#e6e685', fontWeight:'bold'}}> Proceed to DASHBOARD </button>
    </div>
  )
}