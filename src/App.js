import React, { useState } from 'react';
import TitleForm from './components/TitleForm';
import TitleList from './components/TitleList';
import './App.css';

function App() {
  const [titles, setTitles] = useState([]);

  const addTitle = (title, password) => {
    setTitles([...titles, { title, password, id: Date.now() }]);
  };

  const deleteTitle = (id) => {
    setTitles(titles.filter(title => title.id !== id));
  };

  const editTitle = (id, newTitle, newPassword) => {
    setTitles(titles.map(title => title.id === id ? { ...title, title: newTitle, password: newPassword } : title));
  };

  return (
    <div className="App">
      <div className="Header">
        <h1>Password Keeper</h1>
        <p>Total Password: {titles.length}</p>
      </div>
      
      <TitleForm addTitle={addTitle} />
      <TitleList titles={titles} deleteTitle={deleteTitle} editTitle={editTitle} />
    </div>
  );
}

export default App;

