// FILE: DishesCardsComponent/index.js

// Import react components
import { useEffect, useState } from 'react'
import { styled, keyframes } from 'styled-components'

// Import project's components
import DishCard from '../DishCard'

// Import API
import { getMenu } from '../../services/apiServices'

// Import logo
import logo from '../../assets/images/logo.png'

// CSS rules
const DishesCardsWrapper = styled.div`
  margin-top: 40px;
  padding: 0 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 6px;
`

// Animation du loader (zoom in/out)
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`

const LoaderImage = styled.img`
  width: 80px;
  height: 80px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`

// End CSS rules

function DishesCardsComponent() {
  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)

  // Fonction pour mélanger un tableau
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

  // Fetch menu depuis l'API
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await getMenu({ available: true, limit: 20 })
        const { menu } = response.data
        if (menu.length) {
          const shuffled = shuffleArray(menu)
          setDishes(shuffled.slice(0, 4))
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du menu :", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDishes()
  }, [])

  if (loading) {
    return (
      <LoaderWrapper>
        <LoaderImage src={logo} alt="Chargement..." />
      </LoaderWrapper>
    )
  }

  return (
    <DishesCardsWrapper>
      {dishes.length ? (
        dishes.map((dish) => (
          <DishCard
            key={dish._id}
            title={dish.name}
            description={dish.description}
            price={dish.price}
            picture={dish.picture}
            pictureDetail={dish.pictureDetail || dish.picture}
          />
        ))
      ) : (
        <p>Aucun plat disponible</p>
      )}
    </DishesCardsWrapper>
  )
}

export default DishesCardsComponent
