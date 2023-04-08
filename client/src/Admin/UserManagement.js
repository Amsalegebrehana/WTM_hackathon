import React, { useEffect, useState } from 'react';
import axios from 'axios';
const UserManagement = () => {


    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get('/api/v1/user/')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  const addUser = async (user) => {
    try {
      const response = await fetch('/api/v1/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add user.');
      }
  
      const newUser = await response.json();
      setUsers([...users, newUser]);
    } catch (error) {
      console.error(error);
    }
  };
  
  const editUser = async (index, updatedUser) => {
    try {
      const response = await fetch(`/api/v1/user/${updatedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update user.');
      }
  
      const updatedUserFromApi = await response.json();
      const updatedUsers = [...users];
      updatedUsers[index] = updatedUserFromApi;
      setUsers(updatedUsers);
    } catch (error) {
      console.error(error);
    }
  };
  
  const deleteUser = async (index) => {
    try {
      const userToDelete = users[index];
      const response = await fetch(`/api/v1/user//${userToDelete.id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete user.');
      }
  
      const updatedUsers = [...users];
      updatedUsers.splice(index, 1);
      setUsers(updatedUsers);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">User Management</h3>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={() => editUser(index, user)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteUser(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
