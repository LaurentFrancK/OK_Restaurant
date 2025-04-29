// Import assets
import pizza from '../assets/images/dishes/pizza.jpg';
import pizzaDetailed from '../assets/images/dishes/pizzaDetailed.jpg';
import brics from '../assets/images/dishes/brics.jpg';
import coteDeBoeuf from '../assets/images/dishes/cote-de-boeuf.jpg';
import coteDetailed from '../assets/images/dishes/coteDetailed.jpg';
import pancake from '../assets/images/dishes/pancake.jpg';
import pancakeDetailed from '../assets/images/dishes/pancakeDetailed.jpg';
import pouletFrit from '../assets/images/dishes/poulet-frit.jpg';
import pouletDetailed from '../assets/images/dishes/pouletDetailed.jpg';
import ramen from '../assets/images/dishes/ramen.jpg';
import ramenDetailed from '../assets/images/dishes/ramenDetailed.jpg';
import spaghetti from '../assets/images/dishes/spaghetti.jpg';
import spaghettiDetailed from '../assets/images/dishes/spaghettiDetailed.jpg';
import steak from '../assets/images/dishes/steak.jpg';
import steakDetailed from '../assets/images/dishes/steakDetailed.jpg';

export const DishesData = [
    {
        id: 1,
        name: 'Pizza',
        image: pizza,
        description: 'Une pizza est un plat traditionnel italien, composé de pâtes feuilles de tomate, fromage, et des oignons, accompagnées d\'une sauce tomate ou de sauce cream cheese.',
        price: 12,
        pictureDetail: pizzaDetailed,
        category: 'plat' // Catégorie ajoutée
    },
    {
        id: 2,
        name: 'Brics',
        image: brics,
        description: 'Les brics sont des plats traditionnels russes, composés de plats de riz, de farine, de sucre, de lait, et de beurre.',
        price: 10,
        pictureDetail: '',
        category: 'dessert' // Catégorie ajoutée
    },
    {
        id: 3,
        name: 'Cote de boeuf',
        image: coteDeBoeuf,
        description: 'La côte de boeuf est un plat traditionnel français, composé de légumes, de fromage, et de sauce tomate ou sauce cream cheese.',
        price: 15,
        pictureDetail: coteDetailed,
        category: 'plat' // Catégorie ajoutée
    },
    {
        id: 4,
        name: 'Pancake',
        image: pancake,
        description: 'Un pancake est un plat traditionnel américain, composé de pâtes feuilles de riz, de farine, de sucre, de lait, et de beurre.',
        price: 8,
        pictureDetail: pancakeDetailed,
        category: 'dessert' // Catégorie ajoutée
    },
    {
        id: 5,
        name: 'Poulet frit',
        image: pouletFrit,
        description: 'Le poulet frit est un plat traditionnel français, composé de poulet, de fromage, de sauce tomate ou sauce cream cheese.',
        price: 13,
        pictureDetail: pouletDetailed,
        category: 'plat' // Catégorie ajoutée
    },
    {
        id: 6,
        name: 'Ramen',
        image: ramen,
        description: 'Le ramen est un plat traditionnel japonais, composé de riz, de noodles, de sauce soja ou épices.',
        price: 11,
        pictureDetail: ramenDetailed,
        category: 'plat' // Catégorie ajoutée
    },
    {
        id: 7,
        name: 'Spaghetti',
        image: spaghetti,
        description: 'Le spaghetti est un plat traditionnel italien, composé de spaghetti, de sauce tomate ou de sauce cream cheese.',
        price: 14,
        pictureDetail: spaghettiDetailed,
        category: 'plat' // Catégorie ajoutée
    },
    {
        id: 8,
        name: 'Steak',
        image: steak,
        description: 'Le steak est un plat traditionnel américain, composé de steak de boeuf, de fromage, de sauce tomate ou sauce cream cheese.',
        price: 18,
        pictureDetail: steakDetailed,
        category: 'plat' // Catégorie ajoutée
    }
];
