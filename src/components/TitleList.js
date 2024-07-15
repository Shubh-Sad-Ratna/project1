import React, { useState } from 'react';

function TitleList({ titles, deleteTitle, editTitle }) {
  const [isEditing, setIsEditing] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleEdit = (title) => {
    setIsEditing(title.id);
    setNewTitle(title.title);
    setNewPassword(title.password);
  };

  const handleEditSubmit = (id) => {
    editTitle(id, newTitle, newPassword);
    setIsEditing(null);
    setNewTitle('');
    setNewPassword('');
  };

  return (
    <ul>
      {titles.map((title) => (
        <li key={title.id}>
          {isEditing === title.id ? (
            <>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button onClick={() => handleEditSubmit(title.id)}>Save</button>
            </>
          ) : (
            <>
              {title.title} ({title.password})
              <button onClick={() => handleEdit(title)}>Edit</button>
              <button onClick={() => deleteTitle(title.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TitleList;
