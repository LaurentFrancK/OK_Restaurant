// FILE: admin/HeaderAdmin.jsx
// Display the Header for the administration interface

// Import react component
import { styled } from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { FaCogs } from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi'

// Import project's components
import colors from '../../../utils/colors';
import { UserContext } from '../../../contexts/UserContext';

// CSS styles
const HeaderAdminComponent = styled.header`
    width: 90%;
    height: 70px;
    margin: 0 auto;
    background-color: ${colors.dark};
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 2px 3px 2px 2px #ded5d5;
`

const AdminLogo = styled.h2`
    font-size: 30px;
    color: ${colors.white};
    font-variant: small-caps;
`

const Admin = styled.span`
    color: ${colors.orange}
`
const Section2Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 65%;
`
const AdminWelcome = styled.h3`
    font-size: 25px;
    color: ${colors.white};
`

const NavLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 19px;
    color: ${colors.black};
    padding: 10px 35px;
    border-radius: 1000px;
    text-decoration: none;
    text-align: center;
    transition: 0.3s ease-in-out;
    background-color: ${colors.orange};
    font-weight: bold;

    &:hover {
        background-color: ${colors.orange};
        color: ${colors.white};
    }

    &.admin-exit {
        background-color: ${colors.white};
        color: ${colors.dark};
        border: 1px solid transparent;
    }

    &.admin-exit:hover {
        background-color: ${colors.dark};
        color: ${colors.orange};
        border: 1px solid ${colors.white};
    }
`;
// End CSS


function HeaderAdmin () {
    const { user, logoutUser } = useContext(UserContext); // <-- récupérer user et logout
    const navigate = useNavigate();
    const handleLogout = () => {
        logoutUser();       // supprime token + user du contexte et localStorage
        navigate("/login"); // redirige vers la page login
    };
    return (
        <HeaderAdminComponent>
            <AdminLogo>OK Restaurant <Admin>Admin <FaCogs /></Admin></AdminLogo>
            <Section2Header>
                <AdminWelcome> Bonjour, {user.name} </AdminWelcome>
                <NavLink  to="/" className="admin-exit" style={{ cursor: "pointer" }}>
                    Compte utilisateur
                </NavLink>
                <NavLink as="button" onClick={handleLogout} style={{ cursor: "pointer" }}>
                    Logout <FiLogOut size={20}/>
                </NavLink>
            </Section2Header>
        </HeaderAdminComponent>
    )
}

export default HeaderAdmin