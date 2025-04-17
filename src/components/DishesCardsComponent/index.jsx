// Import react components
import { useMemo } from 'react';
import { styled } from 'styled-components';

// Import project's components
import DishCard from '../DishCard';

// Import Data
import { DishesData } from '../../utils/DishesData';

// CSS rules
const DishesCardsWrapper = styled.div`
    margin-top: 40px;
    padding: 0 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 6px;
`;

// End CSS rules

function DishesCardsComponent() {
    // Fonction pour mélanger un tableau
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Utiliser useMemo pour éviter de recalculer à chaque re-render
    const randomDishes = useMemo(() => {
        // Mélanger les plats et en prendre 4
        const shuffledDishes = shuffleArray(DishesData);
        return shuffledDishes.slice(0, 4); // Prendre les 4 premiers éléments
    }, []); // Ne recalculera que lors du premier rendu

    return (
        <DishesCardsWrapper>
            {/* Afficher les plats aléatoires */}
            {randomDishes.map((dish) => (
                <DishCard
                    key={dish.id}
                    title={dish.name}
                    description={dish.description}
                    price={dish.price}
                    picture={dish.image}
                    pictureDetail={dish.pictureDetail}
                />
            ))}
        </DishesCardsWrapper>
    );
}

export default DishesCardsComponent;
