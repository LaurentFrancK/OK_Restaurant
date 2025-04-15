// Import react's components
import {styled} from 'styled-components'

// Import project's components
import colors from '../../utils/colors'


// CSS Rules
const ContactBloc = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
margin: 50px;
`

const Contact = styled.div`
display: block;
text-align: center;
font-size: 16px;
color: ${colors.black};
font-size: 1.2em;`

const ContactTitle = styled.h3`
font-weight: bold;
margin-bottom: 10px;
`

function ContactInfo () {
    return (
        <ContactBloc>
            <Contact>
                <ContactTitle>
                    Téléphone
                </ContactTitle>
                (+241) 01 23 45 67 89
            </Contact>
            <Contact>
                <ContactTitle>
                    Email
                </ContactTitle>
                ok_restaurant@info.com
            </Contact>
            <Contact>
                <ContactTitle>
                    Adresse
                </ContactTitle>
                156 Boulevard leon mba, Libreville
            </Contact>
        </ContactBloc>
    )
}

export default ContactInfo