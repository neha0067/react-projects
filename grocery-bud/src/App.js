import './App.css';
import React from 'react';
import List from './Components/List';

function App() {
  const [item, setItem] = React.useState('');
  const [list, setList] = React.useState([]);

  
  function handleSubmit(e){
    e.preventDefault();
    setList((prevState) => [...prevState, item]);
    setItem('');
  }

  function deleteItem(item){
    const filtered = list.filter((e) => {
      return item !== e;
    });

    setList(filtered);
  }

  return (
    <div className='container'>
      <h2>Grocery Bud</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
        <button>Add Item</button>
      </form>
      <div>
        {
          list.map((listItem, index) => {
            return <List key={index} listItem={listItem} deleteItem={deleteItem}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
