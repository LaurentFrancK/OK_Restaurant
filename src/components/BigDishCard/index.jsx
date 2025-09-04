import React, { useState } from "react"
import styled from "styled-components"

// Import project's components
import colors from "../../utils/colors"
import ModalDishDetails from "../ModalDishDetails"

// CSS rules
const CardContainer = styled.div`
    width: 300px;
    height: 250px;
    border-radius: 10px;
    background-image: ${props => props.image ? `url(${props.image})` : 'none'};
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transition: opacity 0.4s ease;
    text-align: center;

    ${CardContainer}:hover & {
        opacity: 1;
    }
`

const TitlePriceRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`

const DishTitle = styled.h2`
    font-variant: small-caps;
    color: ${colors.white};
    font-size: 20px;
    margin: 0;
    border-bottom: 5px solid ${colors.orange};
`

const DishPrice = styled.span`
    background-color: ${colors.orange};
    color: ${colors.black};
    padding: 5px 12px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 20px;
`

const DishDescription = styled.p`
    color: ${colors.white};
    font-size: 14px;
    margin: 0;
`

const DishDetailsButton = styled.button`
    margin-top: 20px;
    padding: 8px 20px;
    background-color: ${colors.orange};
    color: ${colors.black};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: ${colors.black};
        color: ${colors.orange};
    }
`

function BigDishCard ({title, description, price, image}) {
    const [isModalOpen, setModalOpen] = useState(false)

    const dish = {
        name: title,
        description,
        price,
        picture: image,
        pictureDetail: image, // Assume pictureDetail is the same as the image for now
    }

    return (
        <>
            <CardContainer image={image}>
                <Overlay>
                    <TitlePriceRow>
                        <DishTitle>{title}</DishTitle>
                        <DishPrice>{price} FCFA</DishPrice>
                    </TitlePriceRow>
                    <DishDescription>{description}</DishDescription>
                    <DishDetailsButton onClick={() => setModalOpen(true)}>
                        Voir détails
                    </DishDetailsButton>
                </Overlay>
            </CardContainer>

            <ModalDishDetails
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                dish={dish}
            />
        </>
    )
}

export default BigDishCard
