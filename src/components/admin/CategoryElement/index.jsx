// FILE: CategoryElement/index.jsx

// Import react's components
import { styled } from "styled-components";
import { useEffect, useState } from "react";

// Import project's components
import colors from "../../../utils/colors";

// CSS style
const CategoryBloc = styled.div`
  width: 400px;
  height: 130px;
  border-radius: 20px;
  background-color: ${colors.white};
  box-shadow: 1px 2px 8px ${colors.grey};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 2px 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryTitle = styled.h4`
  font-size: 18px;
  text-align: left;
  padding: 10px;
  color: ${colors.grey};
`;

const CategoryData = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CategoryValue = styled.h4`
  font-size: 40px;
  text-align: left;
  padding: 10px;
  font-weight: bold;
  color: ${colors.dark};
`;

// End CSS style

function CategoryElement({ title, number, icon }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // durée de l’animation en ms
    const stepTime = 16; // environ 60 FPS
    const increment = number / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        clearInterval(counter);
        setDisplayValue(number);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [number]);

  return (
    <CategoryBloc>
      <CategoryTitle>{title}</CategoryTitle>
      <CategoryData>
        <CategoryValue>{displayValue}</CategoryValue>
        {icon}
      </CategoryData>
    </CategoryBloc>
  );
}

export default CategoryElement;
