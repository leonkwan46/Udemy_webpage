import './App.css';
import React from 'react';
import { BrowserRouter as Rounter, Routes, Route, Navigate } from 'react-router-dom'
import Users from './user/pages/users'
import NewPlace from './places/pages/new_place';


function App() {
  return (
    <Rounter>
      <Routes>
        <Route path='/' exact element={<Users />} />
        <Route path='/place' exact element={<NewPlace />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Rounter>

  );
}

export default App;
