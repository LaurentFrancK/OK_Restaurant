// FILE: DashBoard/index.jsx

// Import React's components
import {styled} from 'styled-components'
import { FaUsers, FaShoppingCart, FaUtensils } from "react-icons/fa";

// Import projects components
import colors from '../../../utils/colors'
import CategoryElement from '../../../components/admin/CategoryElement'
import { getAllUsers, getAllOrders, getMenu } from '../../../services/apiServices'
import { useEffect, useState } from 'react';

// CSS style
const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;
  background: linear-gradient(135deg, ${colors.lightGrey}, #f9fafb);
`

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.darkGrey};
  margin-bottom: 40px;
`

const DashBoardComponent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`

// End CSS style

function DashBoard () {
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [menuCount, setMenuCount] = useState(0);

  // Charger les données à l’ouverture
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getAllUsers();
        setUsersCount(users.data.users?.length || 0);

        const orders = await getAllOrders();
        setOrdersCount(orders.data.orders?.length || 0);

        const menu = await getMenu();
        setMenuCount(menu.data.menu?.length || 0);
      } catch (err) {
        console.error("Erreur lors du chargement des données:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <Body>
      <Title>Tableau de bord Administrateur</Title>
      <DashBoardComponent>
        <CategoryElement
          title="Nombre total d'utilisateurs"
          number={usersCount}
          icon={<FaUsers size={60} color="blue" />}
        />
        <CategoryElement
          title="Nombre total de commandes"
          number={ordersCount}
          icon={<FaShoppingCart size={60} color="green" />}
        />
        <CategoryElement
          title="Nombre total de plats au menu"
          number={menuCount}
          icon={<FaUtensils size={60} color="orange" />}
        />
      </DashBoardComponent>
    </Body>
  )
}

export default DashBoard