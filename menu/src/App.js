import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import menu from './data';
import Categories from './Components/Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = React.useState(menu)

  function filterMenu(category){
    if(category === "all"){
      setMenuItems(menu);
      return;
    }
    const filteredMenu = menu.filter((item) => item.category === category);
    setMenuItems(filteredMenu);
  }

  return (
    <div>
      <h1>Our Menu</h1>
      <div className='underline'></div>
      <Categories categories={allCategories} filter={filterMenu}/>
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
