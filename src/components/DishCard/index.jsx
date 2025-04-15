// Import react components
import {styled} from 'styled-components'
import PropTypes from 'prop-types'
import { FaEye } from 'react-icons/fa'


// Import project's components
import colors from '../../utils/colors'


// Import assets
import DefaultPicture from '../../assets/images/logo.png'

// CSS rules

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px;
    border: none;
    border-radius: 5px;
    box-shadow: 3px 4px 5px ${colors.orange};
    background-color: #${colors.white};
    width: 300px;
    margin: 5px;
`

const DishName = styled.h2`
    text-align: center;
    font-size: 24px;
    margin: 12px 0;
    border-bottom: 1px solid ${colors.black};
`
const DishDescription = styled.p`
    text-align: center;
    font-size: 18px;
    margin: 10px;
    font-weight: lighter;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limite à 3 lignes */
    -webkit-box-orient: vertical;
    overflow: hidden;
`
const DishPicture = styled.img`
    height: 200px;
    width: 96%;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 5px;
`
const DishBottom = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin: 10px 0;
width: 100%
`
const DishPrice = styled.p`
    text-align: center;
    padding: 10px;
    background-color: ${colors.orange};
    border-radius: 5px;
    width: 35%;
`
const DishDetails = styled.button`
width: 50px;
height: 50px;
background-color: #000;
padding: 10px;
color: ${colors.white};
font-size: 25px;
border-radius: 5px;
cursor: pointer;
border: 1px solid transparent;
transition: 0.3s ease-in-out;

&:hover {
    background-color: #fff;
    color: ${colors.orange};
    border: 1px solid ${colors.orange};
}
`

// End CSS rules

function DishCard ({ title = 'Nom du plat', description = 'Description du plat', price = 0, picture = DefaultPicture }) {
    return (
        <Card>
            <DishName>{title}</DishName>
            <DishPicture src={picture} alt={title} />
            <DishDescription>{description}</DishDescription>
            <DishBottom>
                <DishPrice>Prix : {price}€</DishPrice>
                <DishDetails><FaEye /></DishDetails>
            </DishBottom>
        </Card>
    )
}

DishCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    picture: PropTypes.string,
}

export default DishCard