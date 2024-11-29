import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [username, setUsername] = useState("Coffee with Code");
  const [username2, setUsername2] = useState("Mihir");

  let obj ={
    name :"Mihir",
    age : 19
  }

  let Arr = [1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Coffee with Code</h1>
      <Card
        username={username} 
        someobj = {obj}
        btnText="Click me" 
        setUserName={() => setUsername("You don't like coffee")} 
      />
      <Card 
        username={username2} 
        btnText="Click me too ;)" 
        setUserName={() => setUsername2("Agath")} 
      />
    </>
  );
}

export default App;
