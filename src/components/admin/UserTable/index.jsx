// FILE: UserTable/index.jsx

import { styled } from "styled-components";
import { useState } from "react";

// CSS-in-JS
const Table = styled.table`
  width: 80%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 30px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Th = styled.th`
  padding: 16px;
  background: #f4f6f8;
  text-align: center;
  font-weight: 700;
  color: #333;
  font-size: 15px;
`;

const Td = styled.td`
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
  text-align: center;
  font-size: 14px;
  color: #555;
`;

const Tr = styled.tr`
  transition: all 0.3s;
  &:hover {
    background: #f0f4f8;
    transform: translateY(-2px);
  }
  &:nth-child(even) {
    background: #fafafa;
  }
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  margin: 0 5px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &.delete {
    background: #e74c3c;
    color: #fff;
  }

  &.delete:hover {
    background: #c0392b;
  }
`;

const Select = styled.select`
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  min-width: 100px;
  transition: all 0.2s;

  &:hover {
    border-color: #888;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0,123,255,0.5);
  }
`;

// Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
`;

const ModalButton = styled.button`
  padding: 8px 16px;
  margin: 10px;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &.confirm {
    background: #e74c3c;
    color: #fff;
  }

  &.confirm:hover {
    background: #c0392b;
  }

  &.cancel {
    background: #ccc;
    color: #333;
  }

  &.cancel:hover {
    background: #aaa;
  }
`;

// Composant
function UserTable({ users, onEditRole, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteClick = (userId) => {
    setSelectedUser(userId);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedUser);
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>Username</Th>
            <Th>Nom</Th>
            <Th>Email</Th>
            <Th>Rôle</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Tr key={user._id}>
              <Td>{user.surName}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Select
                  value={user.role}
                  onChange={(e) => onEditRole(user._id, e.target.value)}
                >
                  <option value="user">Utilisateur</option>
                  <option value="admin">Admin</option>
                </Select>
              </Td>
              <Td>
                <ActionButton
                  className="delete"
                  onClick={() => handleDeleteClick(user._id)}
                >
                  Supprimer
                </ActionButton>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
            <ModalButton className="confirm" onClick={handleConfirmDelete}>
              Supprimer
            </ModalButton>
            <ModalButton className="cancel" onClick={handleCancel}>
              Annuler
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

export default UserTable;
