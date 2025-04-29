// Import react components
import styled from 'styled-components'
import { FaList, FaTimes, FaSearch } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

// Import project's components
import { DishesData } from '../../utils/DishesData'
import colors from '../../utils/colors'
import BigDishCard from '../../components/BigDishCard'

// CSS rules
const DishesContainer = styled.div`
    margin: 100px auto;
    padding: 20px;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
`

// ******** Search section ************
const SearchSection = styled.div`
    width: 50%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 80px auto;
`

const SearchBar = styled.input.attrs({type : "text"})`
    width: 70%;
    height: 60%;
    background-color: ${colors.orange};
    border: 3px solid transparent;
    border-radius: 30px;
    outline: none;
    padding: 30px;
    transition: .2s ease-in;

    &:focus {
        background-color: transparent;
        border: 3px solid ${colors.orange};
    }

    &::placeholder {
        color: ${colors.white};
        opacity: 0.7;
        font-style: italic;
        font-size: 20px;
        text-align: center;
    }
`

const SearchButton = styled.button`
    width: 20%;
    height: 60px;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: ${colors.white};
    padding: 20px auto;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: ${colors.orange};
        box-shadow: 4px 3px 4px ${colors.orange};
    }
`

// ******* Filter section ***********
const FilterSection = styled.div`
    position: relative;
    transition: .5s ease-in-out;
`

const FilterButton = styled.button`
    position: absolute;
    right: 20px;
    padding: 5px;
    border: none;
    font-size: 25px;
    background-color: transparent;
    transition: .3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: ${colors.orange};
    }
`

const FilterOptions = styled.div`
    position: absolute;
    right: 100px;
    width: 500px;
    height: 200px;
    background-color: rgba(240, 240, 240, 0.7);
    backdrop-filter: blur(10px);
    box-shadow: 6px 6px 8px ${colors.black};
    border-radius: 10px;
    padding: 20px 35px;
    z-index: 10000;
`

const OptionBloc = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

const CheckBox = styled.input`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    vertical-align: middle;
    margin-right: 10px;
    transition: all 0.2s;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:checked::after {
        content: '';
        width: 6px;
        height: 10px;
        border: solid ${colors.black};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        display: inline-block;
    }

    &:focus {
        outline: none;
    }
`

const OptionTitle = styled.label`
    width: 100px;
    font-size: 18px;
    color: #333;
    display: flex;
    text-align: justify;
    justify-content: flex-start;
    cursor: pointer;
`

function Dishes() {
    const [showFilters, setShowFilters] = useState(false)
    const [filters, setFilters] = useState({
        entrees: false,
        boissons: false,
        plats: false,
        dessert: false,
    })
    const [filteredDishes, setFilteredDishes] = useState(DishesData)
    const [searchQuery, setSearchQuery] = useState('') // State pour le texte de recherche

    const filterRef = useRef(null); // Créer une référence au container FilterOptions

    // Mettre à jour le texte de recherche
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }

    // Filtrer les plats en fonction du mot-clé de recherche
    const filterBySearch = (query) => {
        if (query === '') {
            setFilteredDishes(DishesData);  // Réinitialiser les plats si la recherche est vide
        } else {
            const filtered = DishesData.filter(dish =>
                dish.name.toLowerCase().includes(query.toLowerCase()) ||
                dish.description.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredDishes(filtered);
        }
    }

    // Appliquer la recherche à chaque modification du texte
    useEffect(() => {
        filterBySearch(searchQuery);
    }, [searchQuery]);

    // Gérer l'affichage des filtres
    const displayFilters = () => {
        setShowFilters(prev => !prev);
    }

    // Gérer les changements de cases à cocher
    const handleCheckBoxChange = (event) => {
        const { id, checked } = event.target;
        setFilters((prevFilters) => {
            const updatedFilters = {
                ...prevFilters,
                [id]: checked
            }
            filterDishes(updatedFilters);
            return updatedFilters;
        });
    }

    // Filtrer les plats selon les filtres activés
    const filterDishes = (filters) => {
        const filtered = DishesData.filter(dish => {
            if (filters.entrees && dish.category !== 'entrée') return false;
            if (filters.boissons && dish.category !== 'boisson') return false;
            if (filters.plats && dish.category !== 'plat') return false;
            if (filters.dessert && dish.category !== 'dessert') return false;
            return true;
        });
        setFilteredDishes(filtered);
    }

    // Fermer les options de filtre si on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target) && !event.target.closest('button')) {
                setShowFilters(false); // Fermer les filtres si on clique en dehors
            }
        };

        document.addEventListener('mousedown', handleClickOutside); // Ajouter l'événement

        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Nettoyer l'événement
        };
    }, []);

    return (
        <div style={{ marginTop: 150 }}>
            <SearchSection>
                <SearchBar 
                    placeholder='Entrer un mot clé...'
                    value={searchQuery}  // Ajouter la valeur de la recherche ici
                    onChange={handleSearchChange}  // Mettre à jour le texte de la recherche
                />
                <SearchButton><FaSearch /> Rechercher</SearchButton>
            </SearchSection>
            <FilterSection>
                <FilterButton onClick={displayFilters}>
                    {showFilters ? <FaTimes style={{ color: 'red' }} /> : <FaList />}
                </FilterButton>
                {showFilters && <FilterOptions ref={filterRef}>
                    <OptionBloc>
                        <CheckBox 
                            type='checkbox' 
                            id='entrees' 
                            checked={filters.entrees}
                            onChange={handleCheckBoxChange}
                        />
                        <OptionTitle htmlFor='entrees'>Entrées</OptionTitle>
                    </OptionBloc>
                    <OptionBloc>
                        <CheckBox 
                            type='checkbox' 
                            id='boissons' 
                            checked={filters.boissons}
                            onChange={handleCheckBoxChange}
                        />
                        <OptionTitle htmlFor='boissons'>Boissons</OptionTitle>
                    </OptionBloc>
                    <OptionBloc>
                        <CheckBox 
                            type='checkbox' 
                            id='plats' 
                            checked={filters.plats}
                            onChange={handleCheckBoxChange}
                        />
                        <OptionTitle htmlFor='plats'>Plats</OptionTitle>
                    </OptionBloc>
                    <OptionBloc>
                        <CheckBox 
                            type='checkbox' 
                            id='dessert' 
                            checked={filters.dessert}
                            onChange={handleCheckBoxChange}
                        />
                        <OptionTitle htmlFor='dessert'>Desserts</OptionTitle>
                    </OptionBloc>
                </FilterOptions>}
            </FilterSection>
            <DishesContainer>
                {filteredDishes.map(dish =>
                    <BigDishCard
                        key={dish.id}
                        title={dish.name}
                        description={dish.description}
                        price={dish.price}
                        image={dish.image}
                        pictureDetail={dish.pictureDetail}
                    />
                )}
            </DishesContainer>
        </div>
    );
}

export default Dishes;
