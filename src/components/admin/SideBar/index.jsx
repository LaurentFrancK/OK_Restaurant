// FILE: SideBar/index.jsx

// Import react's components
import {styled} from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { MdDashboard } from "react-icons/md";
import { FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";


// Import project's components
import colors from "../../../utils/colors"

// CSS style
const SideBarBloc = styled.div`
    width: 300px;
    height: 600px;
    margin-right: 100px;
    position: fixed;
    top: 15%;
    left: 0;
    background-color: ${colors.dark};
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
    box-shadow: 3px 3px 2px ${colors.grey};
`
const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${'' /* width: 80%; */}
    height: 80%;
    margin: 20px auto;
`

const NavLink = styled(Link)`
    color: ${colors.white};
    font-size: 28px;
    text-decoration: none;
    margin-bottom: 10px;
    padding: 15px 20px;
    width: 90%;
    margin-left: 10%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    transition: .3s ease-in-out;

    &:hover {
        background-color: ${colors.orange};
        color: ${colors.black};
    }

    ${(props) =>
        props.$active &&
        `
        background-color: ${colors.orange};
        color: ${colors.black};
    `}
`

// End CSS style

function SideBar () {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <SideBarBloc>
            <NavLinks>
                <NavLink to="/admin" $active={currentPath === '/admin'}><MdDashboard style={{marginRight: "12"}}  /> Dashbord</NavLink>
                <NavLink to="/admin/users" $active={currentPath === '/admin/users'}><FaUsers style={{marginRight: "12"}} /> Users</NavLink>
                <NavLink to="/admin/orders" $active={currentPath === '/admin/orders'}><FaShoppingCart style={{marginRight: "12"}}  /> Orders</NavLink>
                <NavLink to="/admin/menu" $active={currentPath === '/admin/menu'}><FaUtensils style={{marginRight: "12"}}  /> Menu</NavLink>
            </NavLinks>
        </SideBarBloc>
    )
}

export default SideBar