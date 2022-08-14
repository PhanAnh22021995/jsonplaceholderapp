import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate, Outlet } from "react-router-dom";

const USERS = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(USERS).then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleUserClick = (id: number) => {
    navigate(`/users/${id}`);
  };

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2 className="fw-bold">Users</h2>
      <Table className="table-striped table-hover ">
        <thead className="solid">
          <tr>
            <th className="text-left" style={{ maxWidth: "150px" }}>
              id
            </th>
            <th className="text-left" style={{ maxWidth: "150px" }}>
              name
            </th>
            <th className="text-left" style={{ maxWidth: "150px" }}>
              username
            </th>
            <th className="text-left" style={{ maxWidth: "150px" }}>
              email
            </th>
            <th className="text-left" style={{ maxWidth: "150px" }}>
              phone
            </th>
            <th className="text-left" style={{ maxWidth: "150px" }}>
              website
            </th>
            <th className="text-left" style={{ maxWidth: "150px" }}>
              city
            </th>
            <th className="text-left" style={{ maxWidth: "150px" }}>
              Company Name
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id} onClick={() => handleUserClick(user.id)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.address.city}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Outlet />
    </main>
  );
};

export default Users;
