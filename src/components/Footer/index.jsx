// Import react's components
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

// Import project's components
import colors from '../../utils/colors'

// CSS rules
const FooterBloc = styled.footer`
  width: 100%;
  background-color: ${colors.black};
  padding: 40px 20px;
  color: ${colors.white};
`

const Links = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  align-items: flex-start;
`

const PathLinks = styled.div`
  display: flex;
  flex-direction: column;
`

const SectionTitle = styled.h3`
  text-decoration: underline;
  font-weight: 600;
  color: ${colors.white};
  font-size: 20px;
  margin-bottom: 15px;
`

const UtilsLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const NavLink = styled(Link)`
  text-decoration: none;
`

const UtilLink = styled.li`
  color: ${colors.white};
  padding: 6px 0;
  font-size: 16px;
  transition: 0.3s ease-in-out;

  &:hover {
    padding-left: 10px;
    color: ${colors.primary || '#FFD700'};
  }
`

const SocialMediaBloc = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
`

const SocialMedia = styled(Link)`
  font-size: 28px;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  border-radius: 50%;
  padding: 8px;

  &.Facebook {
    color: #4267B2;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px #4267B2;
    }
  }

  &.Instagram {
    color: #e1306c;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px #e1306c;
    }
  }

  &.Tiktok {
    color: #00f2ea;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px #00f2ea;
    }
  }
`

const Copyright = styled.p`
  text-align: center;
  font-size: 16px;
  margin-top: 40px;
  color: ${colors.white};
`

const Heart = styled.span`
  color: red;
  font-size: 20px;
`

function Footer () {
  return (
    <FooterBloc>
      <Links>
        <PathLinks>
          <SectionTitle>OK Restaurant</SectionTitle>
          <UtilsLinks>
            <NavLink to="/staff"><UtilLink>Notre équipe</UtilLink></NavLink>
            <NavLink to="/review"><UtilLink>Commentaires</UtilLink></NavLink>
            <NavLink to="#"><UtilLink>Réserver une table</UtilLink></NavLink>
          </UtilsLinks>
        </PathLinks>

        <PathLinks>
          <SectionTitle>Liens Utiles</SectionTitle>
          <UtilsLinks>
            <NavLink to="#"><UtilLink>Nos partenaires</UtilLink></NavLink>
            <NavLink to="#"><UtilLink>Mentions légales</UtilLink></NavLink>
            <NavLink to="#"><UtilLink>CGU</UtilLink></NavLink>
          </UtilsLinks>
        </PathLinks>

        <PathLinks>
          <SectionTitle>Réseaux sociaux</SectionTitle>
          <SocialMediaBloc>
            <SocialMedia to="#" className="Facebook"><FaFacebook /></SocialMedia>
            <SocialMedia to="#" className="Instagram"><FaInstagram /></SocialMedia>
            <SocialMedia to="#" className="Tiktok"><FaTiktok /></SocialMedia>
          </SocialMediaBloc>
        </PathLinks>
      </Links>
      <Copyright>
        &copy; Réalisé avec <Heart>&hearts;</Heart> par OKOUYI KONGO Laurent
      </Copyright>
    </FooterBloc>
  )
}

export default Footer
