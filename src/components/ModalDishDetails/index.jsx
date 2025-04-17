// Imports
import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'

// Styled Components
const ModalComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalInformation = styled.div`
  width: 95%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 15px;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  padding:5px 8px;
  background: ${colors.black};
  border: 1px dashed ${colors.black};
  border-radius: 5px;
  font-size: 24px;
  cursor: pointer;
  color: ${colors.white};
  transition: .4s;

  &:hover {
    color: ${colors.black};
    background-color: transparent;
    transform: rotate(180deg);
  }
`

const DishDetail = styled.div`
width: 90%;
height: 95%;
margin: 0 auto;
`

const DishTitle = styled.h1`
text-align: center;
font-weight: bold;
margin-bottom: 15px;
text-decoration: 15px underline ${colors.orange};
`

const DishDescriptionBloc = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
`

const DishPicture = styled.img`
width: 40%;
height: 430px;
object-fit: cover;
border-radius: 10px;
`

const DishDescription = styled.div`
width: 50%;
height: 430px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const DishPresentation = styled.p`
line-height: 20px;
letter-spacing: 3px;
width: 60%;
`

const DishPrice = styled.p`
text-align: center;
background-color: ${colors.orange};
padding: 20px;
border-radius: 5px;
`
// Composant Modal
function ModalDishDetails({ isOpen, onClose, dish }) {
  if (!isOpen || !dish) return null;

  return (
    <ModalComponent>
      <ModalInformation>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <DishDetail>
          <DishTitle>{dish.name}</DishTitle>
          <DishDescriptionBloc>
            <DishPicture src={dish.pictureDetail} alt={dish.name}/>
            <DishDescription>
              <DishPresentation>{dish.description}</DishPresentation>
              <DishPrice>Prix : {dish.price} €</DishPrice>
            </DishDescription>
          </DishDescriptionBloc>
        </DishDetail>
      </ModalInformation>
    </ModalComponent>
  );
}

export default ModalDishDetails;
