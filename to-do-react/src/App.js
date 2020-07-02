import React from 'react';
import Header from './components/header';
import List from './components/list'
// import todo from "./components/mockData";
import './App.css';

const todo = {
  "Items": [
    {
      "id": "1",
      "timestampDue": 1561881986756,
      "name": "Pay bill",
      "complete": false
    }
  ]
}

function App() {
  return (
    <div className="App">
      <Header />
      <List items={todo} />
    </div>
  );
}

export default App;
