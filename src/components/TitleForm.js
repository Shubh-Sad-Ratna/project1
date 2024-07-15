import React, { useState } from 'react';

function TitleForm({ addTitle }) {
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && password) {
      addTitle(title, password);
      setTitle('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TitleForm;
