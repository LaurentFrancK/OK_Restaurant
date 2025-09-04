import { useEffect, useState } from "react";
import { styled } from "styled-components";
import MenuForm from "../../../components/admin/MenuForm";
import MenuTable from "../../../components/admin/MenuTable";
import { getMenu, createMenuItem, updateMenuItem, deleteMenuItem, toggleMenuItem } from "../../../services/apiServices";

const Body = styled.div`
  width: calc(100% - 300px);
  margin-left: 300px;
  margin-top: 100px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

function MenuManager() {
  const [menuItems, setMenuItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const fetchMenu = async (page = 1) => {
    try {
      const res = await getMenu({ page, limit: itemsPerPage });
      setMenuItems(res.data.menu || []);
      setCurrentPage(res.data.page || 1);
      setTotalPages(res.data.pages || 1);
    } catch (err) {
      console.error("Erreur lors du chargement du menu :", err);
    }
  };

  useEffect(() => {
    fetchMenu(currentPage);
  }, [currentPage]);

  const handleCreate = async (itemData) => {
    try {
      await createMenuItem(itemData);
      fetchMenu(currentPage);
    } catch (err) {
      console.error("Erreur lors de la création d’un item :", err.response?.data || err);
    }
  };

  const handleUpdateMenuItem = async (updatedItem) => {
    try {
      await updateMenuItem(updatedItem._id, updatedItem);
      fetchMenu(currentPage);
    } catch (err) {
      console.error("Erreur lors de la mise à jour du plat :", err.response?.data || err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMenuItem(id);
      fetchMenu(currentPage);
    } catch (err) {
      console.error("Erreur lors de la suppression d’un item :", err);
    }
  };

  const handleToggle = async (id) => {
    try {
      await toggleMenuItem(id);
      fetchMenu(currentPage);
    } catch (err) {
      console.error("Erreur lors de l’activation/désactivation :", err);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
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
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Body>
  );
}

export default MenuManager;
