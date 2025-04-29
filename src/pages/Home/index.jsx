// Import react components
import {styled} from 'styled-components'
import { Link } from 'react-router-dom'

// Import project's components
import DishesCardsComponent from '../../components/DishesCardsComponent'
import Title from '../../components/Title'
import Form from '../../components/BookForm'
import ContactInfo from '../../components/ContactInfo'
import Map from '../../components/Map'
import colors from '../../utils/colors'

// Import assets
import logo from '../../assets/images/logo.png'


// Start CSS rules
const WelcomeBloc = styled.div`
  background-color: ${colors.orange};
  padding: 50px;
  text-align: center;
  margin-top: 150px;
`

const WelcomeTitle = styled.h1`
  color: ${colors.black};
  font-size: 36px;
  text-decoration: 10px underline ${colors.white};
`

const RestaurantName = styled.span`
  font-weight: bold;
  color: ${colors.white};
`

const WelcomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const WelcomeText = styled.p`
  color: ${colors.black};
  font-size: 20px;
`

const WelcomeLogo = styled.img`
  height: 300px;
  width: auto;
  transform: rotate(-10deg);
  opacity: .7;
`

const WelcomeTextBloc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  padding: 20px;
`

const BookTableButton = styled(Link)`
  display: block;
  padding: 15px 30px;
  border-radius: 0;
  background-color: ${colors.black};
  color: ${colors.white};
  text-decoration: none;
  width: 250px;
  margin: 10px auto;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
    letter-spacing: 1.5px;
    transition: 0.3s ease;
  }
`

const DishesCardsBloc = styled.div`
  margin-top: 50px;
  text-align: center;
`
const BookTableBloc = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 100%;
  background: linear-gradient(to right, ${colors.white} 70%, ${colors.orange} 30%)
`

const ContactBloc = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: ${colors.white};
`
// End CSS rules

function Home() {
  return (
    <div>
      <WelcomeBloc>
        <WelcomeTitle> Bienvenue <RestaurantName>Ok Restaurant</RestaurantName></WelcomeTitle>
        <WelcomeContent>
          <WelcomeTextBloc>
            <WelcomeText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi fugit ipsa officia ducimus facere aut omnis neque a veniam, voluptate nam cupiditate accusantium fugiat debitis?
            </WelcomeText>
            <BookTableButton to="/book-a-table">Réservez une table</BookTableButton>
          </WelcomeTextBloc>
          <WelcomeLogo src={logo}/>
        </WelcomeContent>
      </WelcomeBloc>

      {/* Dishes component */}
      <DishesCardsBloc>
        <Title firstLetter="N" restOfTheTitle="os plats"/>
        <DishesCardsComponent />
      </DishesCardsBloc>

      {/* Book a table form */}
      <BookTableBloc>
          <Title firstLetter="R" restOfTheTitle="éserver une table"/>
          <Form />
      </BookTableBloc>

      {/* Contact section */}
      <ContactBloc>
        <Title firstLetter="C" restOfTheTitle="ontactez-nous"/>
        <ContactInfo />
        <Map />
      </ContactBloc>
    </div>
  );
}

export default Home;
