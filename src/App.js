
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  
  const sendMessage = (event) => {
    // all the logic to send a message goes here
    setMessages([...messages, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1> hello </h1>

      <input 
      type="text" 
      value={input}
      onChange = {event => setInput(event.target.value)}/>

      <button onClick={sendMessage}> send message </button>
      {/* messages themselves */}
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
