import React, { useContext } from 'react';
import { PasswordContext } from '../PasswordContext';
import PasswordItem from './PasswordItem';

const PasswordList = () => {
  const { passwords, searchTerm } = useContext(PasswordContext);
  const filteredPasswords = passwords.filter(password =>
    password.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-3">
        Number of Titles: {filteredPasswords.length}
      </div>
      <ul className="list-group">
        {filteredPasswords.map((password, index) => (
          <PasswordItem key={index} index={index} password={password} />
        ))}
      </ul>
    </div>
  );
};

export default PasswordList;
