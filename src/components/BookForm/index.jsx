// Import react components
import { useState } from "react"
import {styled} from "styled-components"

// Import project's components

// Import assets


// CSS rules
const FormContainer = styled.form`
    margin: 15px;
    width: 60%;
`

const InputGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`

const Label = styled.label`
    font-weight: bold;
`

const Input = styled.input`
    padding: 20px;
    width: 70%;
    height: 25px;
    border: 2px solid orange;
    border-radius: 5px;
    outline: none;

    &:focus {
        border: none;
        border-bottom: 7px solid orange;
        transition: .3s ease-in-out;
    }
`

const SubmitButton = styled.button`
    font-size: 16px;
    letter-spacing: 1.5px;
    width: 250px;
    color: white;
    margin: 10px auto;
    padding: 15px 25px;
    background-color: black;
    border: 1px solid transparent;
    font-family: "Oleo Script Swash Caps", serif;
    cursor: pointer;

    &:hover {
        background-color: white;
        letter-spacing: 2.3px;
        color: black;
        font-weight: bold;
        border: 1px solid orange;
        transition: .4s ease-in-out;
    }
`

const TextArea = styled.textarea`
    padding: 5px;
    width: 70%;
    height: 130px;
    border: 2px solid orange;
    resize: none;
    outline: none;
`

const FormSendsSuccesfully = styled.p`
    margin: 19px;
    padding: 18px;
    font-size: 19px;
    background-color: green;
    color: white;
    border-radius: 6px;
    text-align: center;
`
const FormError = styled.p`
    margin: 19px;
    padding: 18px;
    font-size: 19px;
    background-color: red;
    color: black;
    border-radius: 6px;
    text-align: center;
`
// End CSS rules

function Form () {
    const [therIsError, setThereIsError] = useState(false)
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    // Create the state of the form input
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        date: '',
        numberOfPeople: '',
        comment: ''
    })

    // The function to update the state
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({...formData, [name]: value })
    }

    // Submit manager
    const handleSubmit = (event) => {
        event.preventDefault()
        let newErrors = {}

        // Verify the input
        if (!formData.name ||!formData.phoneNumber ||!formData.email ||!formData.date ||!formData.numberOfPeople) {
            newErrors.allInputAreNecessary = "Tous les champs doivent être remplis !"
        }
        // ==Phone input==
        if (!/^\+?\d{12}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Le numéro de téléphone doit être valide (11 chiffres)";
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            // Simuler l'envoi des données ici...
            setIsSubmitted(true)
            // Retire le message d'erreur
            setErrors({})

            // Réinitialisation du formulaire
            setFormData({
                name: "",
                phoneNumber: "",
                email: "",
                date: "",
                numberOfPeople: "",
                comment: "",
            });
        }
        else {
            setThereIsError(true)
        }



        // Cache le message après 5 secondes
        setTimeout(() => {
            setIsSubmitted(false)
            setThereIsError(false)
        }, 5000);
    }

    return(
        <FormContainer onSubmit={handleSubmit}>
            {isSubmitted && <FormSendsSuccesfully>Formulaire envoyé avec succès</FormSendsSuccesfully>}
            {therIsError && <FormError>Veuillez vérifier vos informations</FormError>}
            {/* Name */}
            <InputGroup>
                <Label>Nom:</Label>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="ex: John DOE" required/>
            </InputGroup>

            {/* Phone number */}
            <InputGroup>
                <Label>Téléphone:</Label>
                {errors.phoneNumber ? <Input style={{ borderColor: "red" }} type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="+xxx-xxx-xx-xx-xx" required />
                : <Input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="+xxx-xxx-xx-xx-xx" required/>
                }
            </InputGroup>

            {/* Email */}
            <InputGroup>
                <Label>Email:</Label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="ex: john@doe.com" required/>
            </InputGroup>

            {/* Date */}
            <InputGroup>
                <Label>Date:</Label>
                <Input type="date" name="date" value={formData.date} onChange={handleChange} required/>
            </InputGroup>

            {/* Number of people */}
            <InputGroup>
                <Label>Nombre de personnes:</Label>
                <Input type="number" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} max={10} min={1} placeholder="0" required/>
            </InputGroup>

            {/* Add information */}
            <InputGroup>
                <Label>Plus de détails:</Label>
                <TextArea name="comment" value={formData.comment} onChange={handleChange} maxLength="200" placeholder="Avez-vous un message particulier ?"></TextArea>
            </InputGroup>

            {/* Submit button */}
            <InputGroup>
                <SubmitButton type="submit">Réserver</SubmitButton>
            </InputGroup>

        </FormContainer>
    )
}

export default Form