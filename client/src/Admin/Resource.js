import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resource = () => {
  const [resources, setResources] = useState([]);
  const [resource, setResource] = useState({ name: '', description: '', url: '', access_type: '' });

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    const res = await axios.get('/api/v1/resource/');
    setResources(res.data);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResource({ ...resource, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/v1/resource/addResource', resource);
    setResource({ name: '', description: '', url: '', access_type: '' });
    fetchResources();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/v1/resource/${id}`);
    fetchResources();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={resource.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="description" value={resource.description} onChange={handleInputChange} />
        </div>
        <div>
          <label>URL</label>
          <input type="text" name="url" value={resource.url} onChange={handleInputChange} />
        </div>
        <div>
          <label>Access Type</label>
          <input type="text" name="access_type" value={resource.access_type} onChange={handleInputChange} />
        </div>
        <button type="submit">Add Resource</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>URL</th>
            <th>Access Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((res) => (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>{res.description}</td>
              <td>{res.url}</td>
              <td>{res.access_type}</td>
              <td>
                <button onClick={() => handleDelete(res.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Resource;
