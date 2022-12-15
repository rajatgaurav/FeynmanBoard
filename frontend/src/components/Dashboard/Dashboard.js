import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


// component
import TopicList from './TopicList';

export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.topics);

    return (
        <div style={{ backgroundColor: 'bluevioletblack', padding: '50px', borderRadius: '30px' }}>
            <h1 style={{ marginTop: '0px' }}> FEYNMAN BOARD </h1>
            <button onClick={() => navigate('/addtopic', { state: { userId: location.state.userId } })} style={{ marginBottom: '50px', width: '200px', height: '40px', borderRadius: '30px', backgroundColor: '#e6e685', fontWeight: 'bold' }}> ADD TOPIC </button>

            <TopicList topics={location.state.topics} />
        </div>
    )
}
