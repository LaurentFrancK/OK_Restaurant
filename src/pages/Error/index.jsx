// Import react's components
import {styled} from 'styled-components'

// Import project's components
import errorLogo from '../../assets/images/404.png'

// CSS rules

const ErrorBloc = styled.div`
margin: 150px auto;
width: 90%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center`

const ImageComponent = styled.img`
width: 40%;
height: 100%;
border-radius: 20px`



function Error() {
    return (
        <ErrorBloc>
            <ImageComponent src={errorLogo} alt="error page" />
        </ErrorBloc>
    )
}

export default Error