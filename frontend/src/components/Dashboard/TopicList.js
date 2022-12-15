import React from 'react';

export default function TopicList({ topics }) {
  return (
    <div style={{ border: "2px solid red", padding: '0px 20px 0px 20px', borderRadius: '50px', backgroundColor: 'violet' }}>
      <h3>Topic List :</h3>
      {topics.length !== 0 && topics}
    </div>
  )
}
