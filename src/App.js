import './App.css';
import UserList from './useList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function App() {
  const list = useSelector((state) => state.listereducer)
  const [userlist, setUserlist] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(list=> setUserlist(list.data))
  },[]);
  return (
    <div className="App">
      <UserList liste={userlist}></UserList>
      {
        list.map((el)=><div>{el.username}</div>)
      }
    </div>
  );
}

export default App;
