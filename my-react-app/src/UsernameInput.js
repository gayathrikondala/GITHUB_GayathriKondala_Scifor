import React, { useState } from 'react';

function UsernameInput() {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div >

        <h3>Functnal Componenet That Uses The UseState Hook To Manage a UserInput</h3>
      <label>
        Username: 
        <input  type="text" value={username} onChange={handleInputChange} placeholder='Please enter your name' />
      </label>
      <p>Your username is: {username}</p>
    </div>
  );
}

export default UsernameInput;
