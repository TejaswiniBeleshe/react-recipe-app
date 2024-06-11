import './App.css';
import React, { createContext } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"

import NavComponent from './Components/Nav';
import SearchComponent from './Components/Search';
import ItemsComponent from './Components/Items';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';


export let context = createContext();
function App() {
  const [itemList,setList] = useState([])
  const [resId,setId] = useState('652703')
  return (
    <div className="App">
      <context.Provider value={{'itemList':itemList,'setId':setId,'resId':resId}}>
      <NavComponent/>
      <SearchComponent setList={setList}/>
      {/* <ItemsComponent itemList = {itemList}/> */}
      <Outlet/>
      </context.Provider>
    </div>
  );
}

export default App;
