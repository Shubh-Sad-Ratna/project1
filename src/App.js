import React, { useState } from 'react';
import { PasswordProvider } from './PasswordContext';
import Header from './components/Header';
import PasswordList from './components/PasswordList';
import PasswordModal from './components/PasswordModal';
import SearchBar from './components/SearchBar';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <PasswordProvider>
      <div className="container mt-5">
        <Header />
        <div className="mb-3">
          <button className="btn btn-primary" onClick={openModal}>Add New Password</button>
        </div>
        <SearchBar />
        <PasswordList />
        <PasswordModal isOpen={modalIsOpen} closeModal={closeModal} />
      </div>
    </PasswordProvider>
  );
}

export default App;
