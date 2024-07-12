
import React from 'react';
import UserDetails from './components/UserDetails';

const App = () => {
  const user = {
    name: 'Gayathri',
    age: 30,
    email: 'gayathri@gmal.com',
    mobileNo: '13523543543',
    city: 'India'
  };

  return (
    <div>
      <UserDetails 
        name={user.name} 
        age={user.age} 
        email={user.email} 
        mobileNo={user.mobileNo} 
        city={user.city} 
      />
    </div>
  );
};

export default App;
