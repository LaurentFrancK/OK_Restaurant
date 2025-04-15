// Import react's components
import {styled} from 'styled-components'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

// Import projet's components
import colors from '../../utils/colors'

// CSS rules
const FooterBloc = styled.div`
width: 100%;
background-color: ${colors.black};
padding: 30px;
margin-top: 80px;
`

const Links = styled.div`
width: 75%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

const SocialMediaBloc = styled.div`
width: 20%;
display: flex;
justify-content: space-around;
align-items: center;
`
const SocialMedia = styled(Link)`
text-decoration: none;
font-size: 35px;
padding: 5px;
align-items: center;
transition: .3s ease-in-out;
border-radius: 5px;

&.Facebook {
    color: blue;

    &:hover {
        box-shadow: 2px 2px 10px #405de6;
    }
}

&.Instagram {
    color: #e1306c;

    &:hover {
        box-shadow: 2px 2px 10px #e1306c;
    }
}

&.Tiktok {
    color: #00f2ea;

    &:hover {
        box-shadow: 2px 2px 10px #00f2ea;
    }
}
`

const PathLinks = styled.div`
display: flex;
flex-direction: column;
width: 20%;
margin-right: 100px;
`

const SectionTitle = styled.h3`
text-decoration: underline;
font-weight: bold;
color: ${colors.white};
tex-align: center;
margin-bottom: 15px;
`

const UtilsLinks = styled.ol`
list-style-type: square;
padding: 10px;
`

const NavLink = styled(Link)`
text-decoration: none;

&:hover {
    text-decoration: 2px underline ${colors.white};
}
`

const UtilLink = styled.li`
color: ${colors.white};
transition: .3s ease-in-out;

&:hover {
    textDecoration: underline;
    padding-left: 10px;
}
`

const Copyright = styled.p`
text-align: center;
font-size: 20px;
color: ${colors.white};
margin-top: 20px;
`

const Heart = styled.span`
color: red;
font-size: 30px;`
function Footer () {
    return (
        <FooterBloc>
            <Links>
                <PathLinks>
                    <SectionTitle>OK Restaurant</SectionTitle>
                    <UtilsLinks>
                        <NavLink ><UtilLink>Notre équipe</UtilLink></NavLink>
                        <NavLink ><UtilLink>Commentaires</UtilLink></NavLink>
                        <NavLink ><UtilLink>Réserver une table</UtilLink></NavLink>
                    </UtilsLinks>
                </PathLinks>

                <PathLinks>
                    <SectionTitle>Liens Utiles</SectionTitle>
                    <UtilsLinks>
                        <NavLink ><UtilLink>Nos partenaires</UtilLink></NavLink>
                        <NavLink ><UtilLink>Commentaires</UtilLink></NavLink>
                        <NavLink ><UtilLink>Réserver une table</UtilLink></NavLink>
                    </UtilsLinks>
                </PathLinks>
                {/* <SocialMediaBloc>
                    <SocialMedia to="#" className='Facebook'><FaFacebook /></SocialMedia>
                    <SocialMedia to="#" className='Instagram'><FaInstagram /></SocialMedia>
                    <SocialMedia to="#" className='Tiktok'><FaTiktok /></SocialMedia>
                </SocialMediaBloc> */}
            </Links>
            <Copyright> &copy; Réalisé avec <Heart> &hearts; </Heart> par OKOUYI KONGO Laurent</Copyright>
        </FooterBloc>
    )
}

export default Footer