// Import react components
import {styled} from 'styled-components'
import { Link } from 'react-router-dom'

// Import project's components
import colors from '../../utils/colors'

// Import assets
import logo from '../../assets/images/logo.png' 


// CSS

const HeaderComponent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: ${colors.white};
    padding: 15px;
    display: flex;
    background-color: ${colors.orange};
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
    color: ${colors.black};
    padding: 15px;
    margin-right: 10px;
    border-bottom: 6px solid transparent;
    border-radius: 0;
    text-decoration: none;
    transition: 0.3s ease-in-out;

    ${(props) =>
        props.$isFullLink &&
        `color: ${colors.black};
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        background-color: ${colors.white};
        font-weight: bold;
        border: none;`
    }

    &:hover {
        border-bottom: 6px solid ${colors.white};
    }

    ${(props) =>
        props.$isFullLink &&
        `
        &:hover {
            color: ${colors.orange};
            background-color: ${colors.black};
            border: none;
        }
        `
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
                <NavLink to="/book-a-table" $isFullLink>Réserver une table</NavLink>
            </NavLinksComponent>
        </HeaderComponent>
    )
}

export default Header