// Import react components
import {styled} from 'styled-components'
import { Link } from 'react-router-dom'

// Import project's components

// Import assets
import logo from '../../assets/images/logo.png' 


// CSS

const HeaderComponent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 15px;
    display: flex;
    background-color: orange;
`

const LogoComponent = styled.img`
    width: 70px;
    height: 65px;
`

const NavLinksComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
`

const NavLink = styled(Link)`
    font-size: 19px;
    color: black;
    padding: 10px;
    margin-right: 10px;
    border-bottom: 3px solid transparent;
    border-radius: 0;
    text-decoration: none;

    &:hover {
        border-bottom: 3px solid #ffffff;
        transition: 0.3s ease-in-out;
    }
`
// End CSS rules
function Header () {
    return (
        <HeaderComponent>
            <LogoComponent  src={logo}/>
            <NavLinksComponent>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/dishes">Nos plats</NavLink>
                <NavLink to="/review">Commentaires</NavLink>
                <NavLink to="/staff">Notre équipe</NavLink>
                <NavLink to="/book-a-table">Réservez une table</NavLink>
            </NavLinksComponent>
        </HeaderComponent>
    )
}

export default Header