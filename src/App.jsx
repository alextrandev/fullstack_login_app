import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import './App.css';

function App() {
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
          <Route path='user/create' element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
