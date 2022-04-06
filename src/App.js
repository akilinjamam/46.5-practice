import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const articleStyle = { border: '2px solid red', borderRadius: '20px', margin: '30px', padding: '10px' }

function App() {
  return (
    <div className="App">
      <article style={articleStyle}>
        <h3>yes i can write a code in the react jsx</h3>
        <p> this is a paragraph tag. <span style={{ color: 'orange', fontFamily: 'cursive', fontWeight: 'bold' }}>now i can write any type of </span>tag in the jsx .</p>
        <hr></hr>
        <Blog heading="this line is for Heading" author="this is for author"></Blog>
        <Blog heading="this line is for Heading" author="this is for author"></Blog>
        <Blog heading="this line is for Heading" author="this is for author"></Blog>
        <Mobile></Mobile>
      </article>

      <LoadData></LoadData>
    </div>
  );
}


function LoadData() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodo(data.slice(0, 30)))
  }, [])
  return (
    <div>
      {
        todos.map(todo => <ShowTodo title={todo.title}></ShowTodo>)
      }
    </div>
  );
}

const style = { backgroundColor: 'lightBlue', padding: '10px', margin: '10px', borderRadius: '20px' }

const ShowTodo = (props) => {

  return (
    <div style={style}>
      <h3>Title: {props.title}</h3>
    </div>
  )
}





function Blog(props) {
  return (
    <div>
      <h3>Heading: {props.heading}</h3>
      <h3>Author: {props.author}</h3>
      <hr></hr>
    </div>
  )
}


function Mobile() {
  const [boost, setBoost] = useState([100]);

  const boostpower = () => {
    if (boost > 0) {
      const downBattery = boost - 10;
      setBoost(downBattery)
    }
  }
  return (
    <div>
      <h2>Battery Percentage : {boost} </h2>

      <button style={{ marginBottom: '10px' }} onClick={boostpower}>Battery Down</button>
      <hr></hr>
    </div>
  )
}





export default App;

