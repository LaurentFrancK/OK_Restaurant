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
  width: 90%;
  max-width: 600px;
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
  border: 1px solid ${colors.black};
  border-radius: 5px;
  font-size: 24px;
  cursor: pointer;
  color: ${colors.white};
  transition: .4s;

  &:hover {
    color: ${colors.black};
    background-color: transparent;
  }
`

// Composant Modal
function ModalDishDetails({ isOpen, onClose, dish }) {
  if (!isOpen || !dish) return null;

  return (
    <ModalComponent>
      <ModalInformation>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <p><strong>Prix :</strong> {dish.price} €</p>
      </ModalInformation>
    </ModalComponent>
  );
}

export default ModalDishDetails;
