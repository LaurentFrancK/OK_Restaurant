// FILE: MenuForm/index.jsx

// Import react's components
import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { FaPlus, FaTimes } from "react-icons/fa"

// Import project's components
import colors from "../../../utils/colors"
import { useState } from "react"
import { createMenuItem } from "../../../services/apiServices"

// CSS style
const ActiveForm = styled(Link)`
    padding: 10px 15px;
    border-radius: 5px;
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    font-size: 20px;
    position: absolute;
    right: 20px;
    cursor: pointer;
    transition: .3s ease;

    &:hover {
        color: ${colors.orange};
    }
`
// ----- Modal -----------
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    position: relative;
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    width: 400px;
    text-align: center;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:5px;
    background: ${colors.black};
    border: 1px dashed ${colors.black};
    border-radius: 5px;
    font-size: 24px;
    cursor: pointer;
    color: ${colors.white};
    transition: .4s;

    &:hover {
        color: ${colors.black};
        background-color: transparent;
        transform: rotate(180deg);
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 50px; /* Pour ne pas chevaucher le bouton close */
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid ${colors.darkBlue};
    border-radius: 6px;
    font-size: 14px;
`;

const TextArea = styled.textarea`
    padding: 10px;
    border: 1px solid ${colors.darkBlue};
    border-radius: 6px;
    font-size: 14px;
`;

const Select = styled.select`
    padding: 10px;
    border: 1px solid ${colors.darkBlue};
    border-radius: 6px;
    font-size: 14px;
`;

const SubmitButton = styled.button`
    padding: 12px;
    background: ${colors.darkBlue};
    color: ${colors.white};
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background: ${colors.orange};
    }
`

// End CSS style

function MenuForm () {
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        picture: "",
        price: "",
        available: true,
        category: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createMenuItem(formData); // <-- appel API
            console.log("Plat ajouté :", response.data);
            setShowModal(false);
            setFormData({
                name: "",
                description: "",
                picture: "",
                price: "",
                available: true,
                category: ""
            }); // reset form
        } catch (error) {
            console.error("Erreur lors de l'ajout :", error.response?.data || error.message);
        }
    };

    return (
        <>
            <ActiveForm as="button" onClick={() => setShowModal(true)}>
                <FaPlus /> Ajouter
            </ActiveForm>

            {showModal && 
                <ModalOverlay>
                    <ModalContent>
                        <CloseButton onClick={() => setShowModal(false)}>
                            <FaTimes />
                        </CloseButton>

                        {/* Formulaire */}
                        <Form onSubmit={handleSubmit}>
                            <Input 
                                type="text" 
                                name="name" 
                                placeholder="Nom du plat" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                            <TextArea 
                                name="description" 
                                placeholder="Description" 
                                rows="3"
                                value={formData.description}
                                onChange={handleChange}
                                required 
                            />
                            <Input 
                                type="text" 
                                name="picture" 
                                placeholder="URL de l'image" 
                                value={formData.picture}
                                onChange={handleChange}
                            />
                            <Input 
                                type="number" 
                                name="price" 
                                placeholder="Prix (FCFA)" 
                                value={formData.price}
                                onChange={handleChange}
                                required 
                            />
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="available" 
                                    checked={formData.available}
                                    onChange={handleChange}
                                /> Disponible
                            </label>
                            <Select 
                                name="category" 
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="">-- Choisir une catégorie --</option>
                                <option value="entrée">Entrée</option>
                                <option value="plat">Plat</option>
                                <option value="dessert">Dessert</option>
                                <option value="boisson">Boisson</option>
                            </Select>

                            <SubmitButton type="submit">Ajouter le plat</SubmitButton>
                        </Form>
                    </ModalContent>
                </ModalOverlay>
            }
        </>
    )
}

export default MenuForm
