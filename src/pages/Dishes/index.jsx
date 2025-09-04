// FILE: Dishes.jsx
import styled, { keyframes } from 'styled-components'
import { FaList, FaTimes } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import { getMenu } from '../../services/apiServices'
import BigDishCard from '../../components/BigDishCard'
import colors from '../../utils/colors'
import debounce from 'lodash.debounce'

// Import logo pour le loader
import logo from '../../assets/images/logo.png'

// ---------- CSS ----------
const DishesContainer = styled.div`
  margin: 50px auto;
  padding: 20px;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: start;
`

const SearchSection = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`

const SearchBar = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 60px;
  font-size: 18px;
  background-color: ${colors.orange};
  border: 3px solid transparent;
  border-radius: 30px;
  outline: none;
  padding: 0 20px;
  caret-color: ${colors.orange};

  &:focus {
    background-color: transparent;
    border: 3px solid ${colors.orange};
  }

  &::placeholder {
    color: ${colors.white};
    opacity: 0.7;
    font-style: italic;
    font-size: 16px;
    text-align: center;
  }
`

const FilterSection = styled.div`
  position: relative;
  margin-bottom: 20px;
`

const FilterButton = styled.button`
  position: absolute;
  right: 20px;
  padding: 5px;
  border: none;
  font-size: 25px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${colors.orange};
  }
`

const FilterOptions = styled.div`
  position: absolute;
  right: 100px;
  width: 300px;
  background-color: rgba(240,240,240,0.9);
  backdrop-filter: blur(10px);
  box-shadow: 6px 6px 8px ${colors.black};
  border-radius: 10px;
  padding: 20px;
  z-index: 10000;
`

const OptionBloc = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const CheckBox = styled.input`
  margin-right: 10px;
`

const OptionTitle = styled.label`
  font-size: 16px;
  cursor: pointer;
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  gap: 10px;
`

const PageButton = styled.button`
  padding: 8px 12px;
  background-color: ${colors.orange};
  border: none;
  border-radius: 6px;
  color: ${colors.white};
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    background-color: ${colors.grey};
    cursor: not-allowed;
  }
`

const SortSelect = styled.select`
  margin-left: 20px;
  padding: 5px 10px;
  border-radius: 6px;
  border: 1px solid ${colors.grey};
`

// Loader animation
const zoomAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

const LoaderImage = styled.img`
  width: 100px;
  height: 100px;
  animation: ${zoomAnimation} 1.5s infinite ease-in-out;
`

// ---------- COMPONENT ----------
function Dishes() {
  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    entrée: false,
    plat: false,
    dessert: false,
    boisson: false,
  })
  const [showFilters, setShowFilters] = useState(false)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [sortBy, setSortBy] = useState('')
  const filterRef = useRef(null)
  const isFirstRender = useRef(true) // empêche le debounce initial

  // ---------- FETCH API ----------
  const fetchMenu = async (query = searchQuery, showLoader = true) => {
    try {
      if (showLoader) setLoading(true)
      const categories = Object.keys(filters).filter(cat => filters[cat])
      const categoryQuery = categories.join(',') || ''

      const delay = new Promise(resolve => setTimeout(resolve, 500))
      const responsePromise = getMenu({
        search: query,
        available: true,
        category: categoryQuery,
        sortBy,
        page,
        limit: 6,
      })

      const [response] = await Promise.all([responsePromise, delay])
      const { menu, pages: totalPages } = response.data
      setDishes(menu)
      setPages(totalPages)
    } catch (error) {
      console.error(error)
    } finally {
      if (showLoader) setLoading(false)
    }
  }

  // ---------- DEBOUNCED SEARCH ----------
  const debouncedFetch = useRef(
    debounce((value) => {
      setSearchLoading(true)
      fetchMenu(value, false).finally(() => setSearchLoading(false))
    }, 700)
  ).current

  useEffect(() => {
    // fetch principal au montage ou changement de page/filtre/tri
    fetchMenu(searchQuery)
  }, [filters, page, sortBy])

  useEffect(() => {
    // search rapide, mais on évite au premier rendu
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    debouncedFetch(searchQuery)
  }, [searchQuery])

  // ---------- HANDLERS ----------
  const handleSearchChange = e => setSearchQuery(e.target.value)
  const toggleFilters = () => setShowFilters(prev => !prev)
  const handleCheckBoxChange = e => {
    const { id, checked } = e.target
    setFilters(prev => ({ ...prev, [id]: checked }))
    setPage(1)
  }
  const handleSortChange = e => setSortBy(e.target.value)

  // ---------- CLOSE FILTERS ON OUTSIDE CLICK ----------
  useEffect(() => {
    const handleClickOutside = e => {
      if (filterRef.current && !filterRef.current.contains(e.target) && !e.target.closest('button')) {
        setShowFilters(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isLoading = loading || searchLoading

  return (
    <>
      {isLoading && (
        <LoaderOverlay>
          <LoaderImage src={logo} alt="Chargement..." />
        </LoaderOverlay>
      )}

      <div style={{ marginTop: 150 }}>
        {/* Search & Sort */}
        <SearchSection>
          <SearchBar
            placeholder="Entrer un mot clé..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <SortSelect value={sortBy} onChange={handleSortChange}>
            <option value="">Trier par</option>
            <option value="priceAsc">Prix croissant</option>
            <option value="priceDesc">Prix décroissant</option>
            <option value="newest">Nouveautés</option>
          </SortSelect>
        </SearchSection>

        {/* Filters */}
        <FilterSection>
          <FilterButton onClick={toggleFilters}>
            {showFilters ? <FaTimes style={{color:'red'}}/> : <FaList />}
          </FilterButton>
          {showFilters && (
            <FilterOptions ref={filterRef}>
              {Object.keys(filters).map(key => (
                <OptionBloc key={key}>
                  <CheckBox
                    type="checkbox"
                    id={key}
                    checked={filters[key]}
                    onChange={handleCheckBoxChange}
                  />
                  <OptionTitle htmlFor={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </OptionTitle>
                </OptionBloc>
              ))}
            </FilterOptions>
          )}
        </FilterSection>

        {/* Dishes */}
        <DishesContainer>
          {dishes.length ? (
            dishes.map(dish => (
              <BigDishCard
                key={dish._id}
                title={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.picture}
                pictureDetail={dish.pictureDetail || dish.picture}
              />
            ))
          ) : (
            <p>Aucun plat trouvé</p>
          )}
        </DishesContainer>

        {/* Pagination */}
        <PaginationContainer>
          <PageButton disabled={page <= 1} onClick={() => setPage(prev => prev - 1)}>Précédent</PageButton>
          <span>Page {page} / {pages}</span>
          <PageButton disabled={page >= pages} onClick={() => setPage(prev => prev + 1)}>Suivant</PageButton>
        </PaginationContainer>
      </div>
    </>
  )
}

export default Dishes
