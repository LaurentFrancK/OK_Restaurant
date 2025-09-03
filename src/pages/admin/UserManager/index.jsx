// FILE: UserManager/index.jsx

// Import react's components
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import UserTable from "../../../components/admin/UserTable";

// Import API services
import { getAllUsers, updateRole, deleteUser } from "../../../services/apiServices";

// CSS style
const Body = styled.div`
  width: calc(100% - 350px);
  margin-left: 350px;
  margin-top: 100px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;
// End CSS style

function UserManager() {
  const [users, setUsers] = useState([]);

  // Charger les utilisateurs au montage
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data.users || []);
    } catch (err) {
      console.error("Erreur lors du chargement des utilisateurs :", err);
    }
  };

  // Modifier rôle d’un utilisateur
  const handleEditRole = async (id, role) => {
  try {
    await updateRole(id, { role });
    fetchUsers();
  } catch (err) {
    console.error("Erreur lors de la modification du rôle :", err.response?.data || err);
  }
};

  // Supprimer un utilisateur
  const handleDelete = async (id) => {

    try {
      await deleteUser(id);
      fetchUsers(); // recharger la liste
    } catch (err) {
      console.error("Erreur lors de la suppression de l’utilisateur :", err);
    }
  };

  return (
    <Body>
      <Title>Gestion des utilisateurs</Title>
      <UserTable
        users={users}
        onEditRole={handleEditRole}
        onDelete={handleDelete}
      />
    </Body>
  );
}

export default UserManager;
