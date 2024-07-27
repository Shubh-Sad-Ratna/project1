import React, { createContext, useState } from 'react';

const PasswordContext = createContext();

const PasswordProvider = ({ children }) => {
  const [passwords, setPasswords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addPassword = (password) => {
    setPasswords([...passwords, password]);
  };

  const updatePassword = (index, updatedPassword) => {
    const updatedPasswords = [...passwords];
    updatedPasswords[index] = updatedPassword;
    setPasswords(updatedPasswords);
  };

  const deletePassword = (index) => {
    const updatedPasswords = passwords.filter((_, i) => i !== index);
    setPasswords(updatedPasswords);
  };

  return (
    <PasswordContext.Provider
      value={{ passwords, searchTerm, setSearchTerm, addPassword, updatePassword, deletePassword }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export { PasswordContext, PasswordProvider };
