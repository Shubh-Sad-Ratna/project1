import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { PasswordContext } from '../PasswordContext';

Modal.setAppElement('#root');

const PasswordModal = ({ isOpen, closeModal, index, password }) => {
  const { addPassword, updatePassword } = useContext(PasswordContext);
  const [currentPassword, setCurrentPassword] = useState({ title: '', password: '' });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (password) {
      setCurrentPassword(password);
      setIsEdit(true);
    } else {
      setCurrentPassword({ title: '', password: '' });
      setIsEdit(false);
    }
  }, [password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentPassword({ ...currentPassword, [name]: value });
  };

  const handleSubmit = () => {
    if (isEdit) {
      updatePassword(index, currentPassword);
    } else {
      addPassword(currentPassword);
    }
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Password Modal">
      <h2>{isEdit ? 'Edit Password' : 'Add New Password'}</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={currentPassword.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={currentPassword.password}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          {isEdit ? 'Update' : 'Add'}
        </button>
        <button type="button" className="btn btn-secondary ms-2" onClick={closeModal}>Cancel</button>
      </form>
    </Modal>
  );
};

export default PasswordModal;
