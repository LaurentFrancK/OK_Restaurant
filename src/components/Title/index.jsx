// Import react components
import {styled} from 'styled-components'

// Import project's components
import colors from '../../utils/colors'

// CSS rules
const TitleComponent = styled.h2`
  text-align: center;
  color: ${colors.black};
  font-size: 36px;
  text-decoration: 10px underline ${colors.black};
  margin-top: 40px;
`

const FirstLetter = styled.span`
  color: ${colors.orange};
`
// End of CSS rules


function Title ({firstLetter, restOfTheTitle}) {
    return (
        <TitleComponent><FirstLetter>{firstLetter.toUpperCase()}</FirstLetter>{restOfTheTitle}</TitleComponent>
    )
}

export default Title