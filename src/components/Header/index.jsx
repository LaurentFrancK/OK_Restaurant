// Import react components
import { styled } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';  // Utilisation de useLocation
import { useState, useEffect } from 'react';  // Pour gérer le scroll

// Import project's components
import colors from '../../utils/colors';

// Import assets
import logo from '../../assets/images/logo.png';

// CSS

const HeaderComponent = styled.header`
    display: flex;
    justify-content: ${(props) => (props.isScrolled ? 'center' : 'flex-end')}; /* Centrer quand on scrolle */
    align-items: center;
    background-color: rgba(252, 175, 69, 0.7);
    color: ${colors.white};
    padding: ${(props) => (props.isScrolled ? '10px 15px' : '15px')}; /* Réduire l'espacement quand on scrolle */
    position: ${(props) => (props.isScrolled ? 'fixed' : 'absolute')}; /* Fixer en haut quand on scrolle */
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: ${(props) => (props.isScrolled ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none')}; /* Ajouter une ombre quand on scrolle */
    backdrop-filter: ${(props) => (props.isScrolled ? 'blur(10px)' : 'none')}; /* Effet de flou */
    transition: padding 0.3s, box-shadow 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out, 0.4s ease-in-out;
`;

const LogoComponent = styled.img`
    width: 70px;
    height: 65px;
    transition: opacity 0.3s ease;
    opacity: ${(props) => (props.isScrolled ? 0 : 1)};  /* Logo caché quand on scrolle */
`;

const NavLinksComponent = styled.div`
    display: flex;
    justify-content: ${(props) => (props.isScrolled ? 'center' : 'flex-end')}; /* Alignement à droite avant le scroll */
    align-items: center;
    width: 100%;  /* Largeur 100% pour occuper toute la largeur disponible */
    transition: transform 0.5s ease-in-out; /* Transition fluide */
`;

const NavLink = styled(Link)`
    font-size: 19px;
    color: ${colors.black};
    padding: 15px;
    margin-right: 10px;
    border-bottom: 6px solid transparent;
    border-radius: 5px;
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

    ${(props) =>
        props.$active &&
        `
        color: ${colors.white};
        font-weight: bold;
        background-color: ${colors.black};
    `}
`;

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();  // Récupération de la route actuelle
    const currentPath = location.pathname;

    // Gérer l'événement de scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true); // Appliquer l'effet de scroll
        } else {
            setIsScrolled(false);
        }
    };

    // Ajouter l'événement de scroll à l'effet
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Nettoyer l'événement au démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderComponent isScrolled={isScrolled}>
            <LogoComponent src={logo} isScrolled={isScrolled} />
            <NavLinksComponent isScrolled={isScrolled}>
                <NavLink to="/" $active={currentPath === '/'}>Accueil</NavLink>
                <NavLink to="/dishes" $active={currentPath === '/dishes'}>Nos plats</NavLink>
                <NavLink to="/review" $active={currentPath === '/review'}>Commentaires</NavLink>
                <NavLink to="/staff" $active={currentPath === '/staff'}>Notre équipe</NavLink>
                <NavLink to="/book-a-table" $active={currentPath === '/book-a-table'} $isFullLink>Réserver une table</NavLink>
            </NavLinksComponent>
        </HeaderComponent>
    );
}

export default Header;
