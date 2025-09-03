// FILE: Header/index.jsx

// Import react components
import { styled } from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

// Project's components
import colors from '../../utils/colors';
import logo from '../../assets/images/logo.png';
import { UserContext } from '../../contexts/UserContext';

// CSS

const HeaderComponent = styled.header`
    display: flex;
    justify-content: ${(props) => (props.isScrolled ? 'center' : 'flex-end')}; /* Centrer quand on scrolle */
    align-items: center;
    background-color: rgba(254, 253, 250, 0.7) /*rgba(252, 175, 69, 0.7)*/;
    color: ${colors.white};
    padding: ${(props) => (props.isScrolled ? '10px 15px' : '15px')}; /* Réduire l'espacement quand on scrolle */
    position: ${(props) => (props.isScrolled ? 'fixed' : 'absolute')}; /* Fixer en haut quand on scrolle */
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: ${(props) => (props.isScrolled ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none')}; /* Ajouter une ombre quand on scrolle */
    backdrop-filter: ${(props) => (props.isScrolled ? 'blur(10px)' : 'none')}; /* Effet de flou */
    ${'' /* transition: padding 0.3s, box-shadow 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out, 0.4s ease-in-out; */}
`;

const LogoComponent = styled.img`
    width: 70px;
    height: 65px;
    transition: opacity 0.3s ease;

    ${(props) => 
        props.isScrolled &&
        `display: none;`
    };
`;

const NavLinksComponent = styled.div`
    display: flex;
    justify-content: flex-end; /* Alignement à droite avant le scroll */
    align-items: center;
    width: 100%;  /* Largeur 100% pour occuper toute la largeur disponible */
    transition: transform 0.5s ease-in-out; /* Transition fluide */

    ${(props) => 
        props.isScrolled &&
        `justify-content: space-around;
        transition: .3s ease-in-out;`
    };
`;

const NavLink = styled(Link)`
    font-size: 19px;
    color: ${colors.black};
    padding: 10px;
    margin-right: 10px;
    border-bottom: 6px solid transparent;
    border-radius: 5px;
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &:hover {
        color: ${colors.orange};
    }

    ${(props) =>
        props.$isFullLink &&
        `color: ${colors.white};
        background-color: ${colors.black};
        font-weight: bold;
        border: 1px solid transparent;
        border-radius: 0;`
    }

    ${(props) =>
        props.$isFullLink &&
        `
        &:hover {
            color: ${colors.orange};
            background-color: ${colors.black};
            border: 1px solid ${colors.black};
        }
        `
    }

    ${(props) =>
        props.$active &&
        `
        color: ${colors.orange};
        border-top: 1px solid ${colors.black};
        border-bottom: 1px solid ${colors.black};
        transition: .3s ease-in-out;
    `}
`;

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const { user, logoutUser } = useContext(UserContext); // <-- récupérer user et logout
    const navigate = useNavigate();

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logoutUser();       // supprime token + user du contexte et localStorage
        navigate("/logIn"); // redirige vers la page login
    };

    return (
        <HeaderComponent isScrolled={isScrolled}>
            <LogoComponent src={logo} isScrolled={isScrolled} />
            <NavLinksComponent isScrolled={isScrolled}>
                <NavLink to="/" $active={currentPath === '/'}>Accueil</NavLink>
                <NavLink to="/dishes" $active={currentPath === '/dishes'}>Nos plats</NavLink>
                <NavLink to="/review" $active={currentPath === '/review'}>Commentaires</NavLink>
                <NavLink to="/staff" $active={currentPath === '/staff'}>Notre équipe</NavLink>

                {/* Si l'utilisateur n'est pas connecté, afficher SignIn et LogIn */}
                {!user ? (
                    <>
                        <NavLink to="/register" $active={currentPath === '/register'} $isFullLink>Register</NavLink>
                        <NavLink to="/logIn" $active={currentPath === '/logIn'} $isFullLink>LogIn</NavLink>
                    </>
                ) : (
                    <>
                        <span style={{ marginRight: "10px", fontWeight: "bold", color: colors.black }}>
                            Bonjour, {user.name}
                        </span>
                        <NavLink as="button" onClick={handleLogout} $isFullLink style={{ cursor: "pointer" }}>
                            Logout
                        </NavLink>

                        {/* Lien Admin visible uniquement pour les admins */}
                        {user.role === 'admin' && (
                            <NavLink to="/admin" $active={currentPath === '/admin'} $isFullLink>Admin</NavLink>
                        )}
                    </>
                )}
            </NavLinksComponent>
        </HeaderComponent>
    );
}

export default Header;