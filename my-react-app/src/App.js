import logo from './logo.svg';
import './App.css';
import UsernameInput from './UsernameInput';
import Counter from './Counter';
import UserList from './UserList';
function App() {
  return (
    <body>
    <center><div>
    <UsernameInput/>
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <UserList/>
      </div>
      </center>
      </body>
    
  );
}

export default App;
