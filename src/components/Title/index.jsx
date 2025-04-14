// Import react components
import {styled} from 'styled-components'

// CSS rules
const TitleComponent = styled.h2`
  text-align: center;
  color: black;
  font-size: 36px;
  text-decoration: 10px underline black;
  margin-top: 40px;
`

const FirstLetter = styled.span`
  color: orange;
`
// End of CSS rules


function Title ({firstLetter, restOfTheTitle}) {
    return (
        <TitleComponent><FirstLetter>{firstLetter.toUpperCase()}</FirstLetter>{restOfTheTitle}</TitleComponent>
    )
}

export default Title