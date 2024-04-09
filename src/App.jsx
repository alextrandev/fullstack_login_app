import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import { useState } from "react";
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputs);
  }
  const handleChange = e => setInputs({...inputs, [e.target.name]: e.target.value});

  return (
    <>
      <h1>Fullstack App</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/">List Users</NavLink>
            </li>
            <li>
              <NavLink to="user/create">Create Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path='user/create' element={
            <CreateUser handleChange={handleChange} handleSubmit={handleSubmit}/>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
