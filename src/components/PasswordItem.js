import React, { useContext, useState } from 'react';
import { PasswordContext } from '../PasswordContext';
import PasswordModal from './PasswordModal';

const PasswordItem = ({ password, index }) => {
  const { deletePassword } = useContext(PasswordContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {password.title}
      <div>
        <button className="btn btn-secondary btn-sm me-2" onClick={openModal}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={() => deletePassword(index)}>Delete</button>
      </div>
      <PasswordModal isOpen={modalIsOpen} closeModal={closeModal} index={index} password={password} />
    </li>
  );
};

export default PasswordItem;
