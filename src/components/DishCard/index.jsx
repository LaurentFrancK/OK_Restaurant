// Import react components
import {styled} from 'styled-components'
import PropTypes from 'prop-types'


// Import project's components


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
    box-shadow: 3px 4px 5px orange;
    background-color: #fff;
    width: 300px;
    margin: 5px;
`

const DishName = styled.h2`
    text-align: center;
    font-size: 24px;
    margin: 12px 0;
    border-bottom: 1px solid black;
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

const DishPrice = styled.p`
    text-align: center;
    width: 90%;
    margin: 10px 0;
    padding: 10px;
    background-color: orange;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
`

// End CSS rules



function DishCard ({ title = 'Nom du plat', description = 'Description du plat', price = 0, picture = DefaultPicture }) {
    return (
        <Card>
            <DishName>{title}</DishName>
            <DishPicture src={picture} alt={title} />
            <DishDescription>{description}</DishDescription>
            <DishPrice>Prix : {price}€</DishPrice>
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