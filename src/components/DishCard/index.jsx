// Import react components
import React, { useState } from 'react'
import { styled } from 'styled-components'
import PropTypes from 'prop-types'
import { FaEye } from 'react-icons/fa'

// Import project's components
import colors from '../../utils/colors'
import ModalDishDetails from '../ModalDishDetails'

// Import assets
import DefaultPicture from '../../assets/images/logo.png'

// CSS Rules
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 2px 5px ${colors.orange};
  background-color: ${colors.white};
  width: 300px;
  margin: 5px;

  &:hover .dishName {
    display: none;
  }

  &:hover .dishPicture {
    opacity: 1;
    transform: scale(1.03);
  }
`

const DishImageWrapper = styled.div`
  position: relative;
  width: 96%;
  height: 200px;
  margin: 0 auto;
`


const DishName = styled.h2`
  width: 80%;
  position: absolute;
  top: 50px;
  left: 10px;
  text-align: center;
  font-size: 24px;
  margin: 12px 0;
  padding: 10px;
  z-index: 100;
  background-color: ${colors.orange};
`

const DishDescription = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 10px;
  font-weight: lighter;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const DishPicture = styled.img`
  height: 200px;
  width: 100%;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 5px;
  opacity: .6;
  transition: 0.5 ease-in-out;
`

const DishBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  width: 100%;
`

const DishPrice = styled.p`
  text-align: center;
  padding: 10px;
  background-color: ${colors.orange};
  border-radius: 5px;
  width: max-content;
  max-width: 200px;
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

// Composant fonctionnel
function DishCard({ title = 'Nom du plat', description = 'Description du plat', price = 0, picture = DefaultPicture, pictureDetail = DefaultPicture }) {
  const [isModalOpen, setModalOpen] = useState(false)

  const dish = {
    name: title,
    description,
    price,
    picture,
    pictureDetail,
  }

  return (
    <>
      <Card>
        <DishImageWrapper>
          <DishName className='dishName'>{title}</DishName>
          <DishPicture src={picture} alt={title} className='dishPicture' />
        </DishImageWrapper>
        <DishDescription>{description}</DishDescription>
        <DishBottom>
          <DishPrice>Prix : {price} FCFA</DishPrice>
          <DishDetails onClick={() => setModalOpen(true)}>
            <FaEye />
          </DishDetails>
        </DishBottom>
      </Card>

      <ModalDishDetails
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        dish={dish}
      />
    </>
  )
}

DishCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  picture: PropTypes.string,
  pictureDetail: PropTypes.string,
}

export default DishCard
