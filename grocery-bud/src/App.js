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
    <main className='container'>
      <div className='form-container'>
        <header>Grocery Bud</header>
        <form onSubmit={handleSubmit} className='form'>
          <input className="text-input" type="text" value={item} onChange={(e) => setItem(e.target.value)} />
          <button className='add-button'>Add Item</button>
        </form>
        <div className='grocery-container'>
          {
            list.map((listItem, index) => {
              return <List key={index} listItem={listItem} deleteItem={deleteItem}/>
            })
          }
        </div>
      </div>
    </main>
  );
}

export default App;
