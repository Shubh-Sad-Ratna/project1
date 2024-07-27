import React, { useContext } from 'react';
import { PasswordContext } from '../PasswordContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(PasswordContext);

  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Search Title"
        className="form-control"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
