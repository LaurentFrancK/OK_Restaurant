// ========= Display all the dishes of the restaurant =========

// Import react's components
import styled from 'styled-components'
import { FaList, FaTimes, FaSearch } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

// Import project's components
import { DishesData } from '../../utils/DishesData'
import colors from '../../utils/colors'
import DishCard from '../../components/DishCard'

// CSS rules
const DishesContainer = styled.div`
  margin: 150px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
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

function Dishes () {
    const [showFilters, setShowFilters] = useState(false)
    const [filters, setFilters] = useState({
        entrees: false,
        boissons: false,
        plats: false,
        dessert: false,
    })

    const filterRef = useRef(null); // Create a reference to the FilterOptions container

    // Toggle the filter display
    const displayFilters = () => {
        setShowFilters(prev => {
          const newValue = !prev;
          if (newValue) {
            console.log('Les filtres sont affichés');
          }
          return newValue;
        });
    }

    // Handle checkbox changes
    const handleCheckBoxChange = (event) => {
        const { id, checked } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [id]: checked,
        }));
    }

    // Close the filter options if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target) && !event.target.closest('button')) {
                setShowFilters(false); // Close filters if clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside); // Add event listener

        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Clean up the event listener
        };
    }, []);

    return (
        <>
            <SearchSection>
                <SearchBar placeholder='Entrer un mot clé... '/>
                <SearchButton><FaSearch /> Rechercher</SearchButton>
            </SearchSection>
            <FilterSection>
                <FilterButton onClick={displayFilters}>
                    {showFilters ? <FaTimes style={{color: 'red'}} /> : <FaList />}
                </FilterButton>
                {showFilters && <FilterOptions ref={filterRef} className='filterOptions'>
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
                {DishesData.map(dish => 
                <DishCard
                    key={dish.id}
                    title={dish.name}
                    description={dish.description}
                    price={dish.price}
                    picture={dish.image}
                    pictureDetail={dish.pictureDetail}
                />
                )}
            </DishesContainer>
        </>
    )
}

export default Dishes
