/* eslint-disable react/prop-types */
// frontend/src/components/ItemList.jsx
function ItemList({ items, onUpdate, onDelete }) {
  const handleUpdate = (id) => {
    const name = prompt('Enter new name:');
    const description = prompt('Enter new description:');
    if (name && description) {
      onUpdate(id, name, description);
    }
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.name}: {item.description}</span>
          <button onClick={() => handleUpdate(item.id)}>Update</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
