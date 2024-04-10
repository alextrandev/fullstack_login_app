import axios from "axios";
import { useEffect, useState } from "react";

function ListUser() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get('http://localhost:8005/api/').then(res => {
      // console.log(res);
      setUsers(res.data)
    })
  }

  // console.log(users[0]);

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <>
      <h1>Users list</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Created at</th>
            <th>Updated at</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.created_at.split(' ')[0]}</td>
              <td>{user.updated_at.split(' ')[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListUser