// frontend/src/App.jsx
import { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

function App() {
  const [items, setItems] = useState([]);

  // Fetch all items
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch('http://localhost:5000/items');
    const data = await response.json();
    setItems(data);
  };

  const handleCreate = async (name, description) => {
    await fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });
    fetchItems(); // Refresh the item list
  };

  const handleUpdate = async (id, name, description) => {
    await fetch(`http://localhost:5000/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });
    fetchItems(); // Refresh the item list
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/items/${id}`, {
      method: 'DELETE',
    });
    fetchItems(); // Refresh the item list
  };

  return (
    <div>
      <h1>Item CRUD</h1>
      <ItemForm onCreate={handleCreate} />
      <ItemList items={items} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;
