// Import react's components
import {styled} from 'styled-components'


// CSS Rules
const ContactBloc = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 500px;
margin: 50px auto;`

const Contact = styled.div`
display: block;
text-align: center;
font-size: 16px;
color: black;
font-size: 1.2em`

const ContactTitle = styled.h3`
font-weight: bold;
margin-bottom: 10px;
`

function ContactInfo () {
    return (
        <ContactBloc>
            <Contact>
                <ContactTitle>
                    Téléphone:
                </ContactTitle>
                (+241) 01 23 45 67 89
            </Contact>
            <Contact>
                <ContactTitle>
                    Email: 
                </ContactTitle>
                ok_restaurant@info.com
            </Contact>
        </ContactBloc>
    )
}

export default ContactInfo