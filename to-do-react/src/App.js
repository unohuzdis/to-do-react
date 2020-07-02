import React from 'react';
import Header from './components/header';
import List from './components/list'
import todo from "./components/mockData";
import './App.css';

// const todo = {
//   "Items": [
//     {
//       "id": "1",
//       "timestampDue": 1561881986756,
//       "name": "Pay bill",
//       "complete": false
//     }
//   ]
// }


function App() {
  const [items, setItems] = React.useState(todo.Items);

  const completeItem = (id) => {
    const updatedItems = items.map(item =>
      (item.id === id ? { ...item, complete: true } : item));
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <Header />
      <List items={items} completeItem={completeItem}/>
    </div>
  );
}

export default App;
