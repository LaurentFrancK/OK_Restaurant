// FILE: MenuManager/index.jsx

// Import react's components
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import MenuForm from "../../../components/admin/MenuForm";
import MenuTable from "../../../components/admin/MenuTable";

// Import API services
import { getMenu, createMenuItem, updateMenuItem, deleteMenuItem, toggleMenuItem  } from "../../../services/apiServices";

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

function MenuManager() {
  const [menuItems, setMenuItems] = useState([]);

  // Charger les items au montage
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await getMenu();
      setMenuItems(res.data.menu || []); // selon ta réponse backend
    } catch (err) {
      console.error("Erreur lors du chargement du menu :", err);
    }
  };

  // Créer un nouvel item
  const handleCreate = async (itemData) => {
    try {
      await createMenuItem(itemData);
      fetchMenu();
    } catch (err) {
      console.error("Erreur lors de la création d’un item :", err.response?.data || err);
    }
  };

  // Modifier un item
  const handleUpdateMenuItem = async (updatedItem) => {
  try {
    await updateMenuItem(updatedItem._id, updatedItem);
    fetchMenu(); // recharge la liste après mise à jour
  } catch (err) {
    console.error("Erreur lors de la mise à jour du plat :", err.response?.data || err);
  }
};

  // Supprimer un item
  const handleDelete = async (id) => {
    try {
      await deleteMenuItem(id);
      fetchMenu();
    } catch (err) {
      console.error("Erreur lors de la suppression d’un item :", err);
    }
  };

  // Activer/Désactiver un item
  const handleToggle = async (id) => {
    try {
      await toggleMenuItem(id);
      fetchMenu();
    } catch (err) {
      console.error("Erreur lors de l’activation/désactivation :", err);
    }
  };

  return (
    <Body>
      <Title>Gestion du menu</Title>
      <MenuForm onCreate={handleCreate} />
      <MenuTable
        menuItems={menuItems}
        onUpdate={handleUpdateMenuItem}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </Body>
  );
}

export default MenuManager;
