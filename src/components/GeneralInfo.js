import React from 'react';
import '../style.css';

function generalInfo() {
  return (
    <div className='generalInfo'>
        <div className="about">
          <h1 className='name'>AMOLE Tolulope</h1>
        <div className='details'>
            <p>Phone number</p>
            <span className='grey'>08063673201</span>
            <p>Email</p>
            <span className='grey'>amoletolulope@gmail.com</span>
        </div>
        </div>
        <div className="summary">
          <h2>Summary</h2>
        </div>
    </div>
  )
}

export default generalInfo