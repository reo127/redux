import { useSelector, useDispatch } from 'react-redux';
import { getUserData, postTodo } from './app/sclices/userSclice';
import { useEffect } from 'react';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.users.users)

  const handleTodo = () => {
    dispatch(postTodo("this is a todo"))
  }


  useEffect(() => {
    dispatch(getUserData())
  }, [])

  // console.log(data);

  return (
    <div className="App">
      
      <h1>create store</h1>
      <h1>Wrap wtih Provider</h1>
      <h1>Create Sclice</h1>
      <h1>add reducres in store</h1>
      <h1>useing useSelectore access data and useDispatch execute functions</h1>

      {data.map((user, index) => {
        return(
          <li key={index}>{user.name}</li>
        )
      })}


      <div>
        <button
        onClick={handleTodo}
        >Post Todo</button>
      </div>


    </div>
  );
}

export default App;
