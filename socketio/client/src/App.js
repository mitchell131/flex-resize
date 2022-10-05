import { io } from 'socket.io-client'
import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

const { data , setData } = useState('')
const url = 'http://localhost:8080'
const socket = io(url)
socket.on('connect', (hello) => {
  const engine = socket.io.engine
  console.log('Connected')
  console.log(engine.transport.name); // in most cases, prints "polling"
})

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
  console.log(err.message);
})

const emitToSocket = () => {
  console.log('into emit function')
  socket.emit('custom-event', { name: 'MitchellMagro'})
}

const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
const listItems = numbers.map((number) =>
<div className='inner'>{number}</div>
);
  return (
    <div className="App">
      <div className='chat'>data: {data}</div>
      <div className='outer'>
         {listItems}
      </div>
      <button onClick={emitToSocket}>emit</button>
    </div>
  );
}

export default App;
