import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('../UserList.json')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h1>User List</h1><hr></hr>
      <ul>
        {users.map(user => (
          <h4>{user.name}</h4>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
}

export default UserList;
