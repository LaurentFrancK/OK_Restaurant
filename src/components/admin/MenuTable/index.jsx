import { useState } from "react";
import { styled } from "styled-components";
import colors from "../../../utils/colors";

// CSS style
const Table = styled.table`
    width: 85%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 100px auto;
    background: ${colors.white};
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    overflow: hidden;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Th = styled.th`
    padding: 16px;
    background: ${colors.darkBlue};
    text-align: center;
    font-weight: 700;
    color: ${colors.white};
    font-size: 15px;
`;

const Td = styled.td`
    padding: 14px 16px;
    border-bottom: 1px solid ${colors.lightGrey};
    text-align: center;
    font-size: 14px;
    color: ${colors.dark};
    max-width: ${({ maxWidth }) => maxWidth || "150px"};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Tr = styled.tr`
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background: ${colors.lightGrey};
        transform: translateY(-1px);
    }

    &:nth-child(even) {
        background: #fafafa;
    }
`;

const Img = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid ${colors.lightOrange};
`;

const ActionButton = styled.button`
    padding: 6px 12px;
    margin: 0 5px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s;
    font-size: 13px;

    &.delete {
        background: ${colors.orange};
        color: ${colors.white};
    }

    &.delete:hover {
        background: ${colors.dark};
        color: ${colors.orange};
    }

    &.toggle {
        background: ${colors.accentBlue};
        color: ${colors.white};
    }

    &.toggle:hover {
        background: ${colors.darkBlue};
    }

    &.inactive {
        background: ${colors.grey};
        color: ${colors.white};
    }

    &.inactive:hover {
        background: ${colors.dark};
    }

    &.edit {
        background: ${colors.lightOrange};
        color: ${colors.darkBlue};
    }

    &.edit:hover {
        background: ${colors.orange};
        color: ${colors.white};
    }
`;

// Modal
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: ${colors.white};
    padding: 30px;
    border-radius: 12px;
    width: 450px;
    text-align: center;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
`;

const ModalButton = styled.button`
    padding: 10px 18px;
    margin: 10px;
    border-radius: 6px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    font-size: 14px;

    &.confirm {
        background: ${colors.orange};
        color: ${colors.white};
    }

    &.confirm:hover {
        background: ${colors.dark};
        color: ${colors.orange};
    }

    &.cancel {
        background: ${colors.lightGrey};
        color: ${colors.dark};
    }

    &.cancel:hover {
        background: ${colors.grey};
        color: ${colors.white};
    }
`;

const Input = styled.input`
    width: 90%;
    padding: 8px;
    margin: 8px 0;
    border-radius: 6px;
    border: 1px solid ${colors.grey};
    font-size: 14px;
`;

const TextArea = styled.textarea`
    width: 90%;
    padding: 8px;
    margin: 8px 0;
    border-radius: 6px;
    border: 1px solid ${colors.grey};
    font-size: 14px;
    resize: none;
`;
// Pagination styles
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;
`;

const PageButton = styled.button`
  padding: 6px 12px;
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
`;

// Composant
function MenuTable({ menuItems, onDelete, onToggle, onUpdate, currentPage, totalPages, onPageChange }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleRowClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleDelete = () => {
        onDelete(selectedItem._id);
        setShowModal(false);
        setSelectedItem(null);
    };

    const handleCancel = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    const handleUpdate = () => {
        onUpdate(selectedItem);
        setShowModal(false);
        setSelectedItem(null);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <Th>Image</Th>
                        <Th>Nom</Th>
                        <Th>Description</Th>
                        <Th>Prix (FCFA)</Th>
                        <Th>Catégorie</Th>
                        <Th>Disponibilité</Th>
                        <Th>Activer/Désactiver</Th>
                        <Th>Modifier</Th>
                        <Th>Supprimer</Th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.length > 0 ? menuItems.map((item) => (
                        <Tr key={item._id} onClick={() => handleRowClick(item)}>
                            <Td><Img src={item.picture} alt={item.name} /></Td>
                            <Td>{item.name}</Td>
                            <Td maxWidth="200px">{item.description}</Td>
                            <Td>{item.price}</Td>
                            <Td>{item.category}</Td>
                            <Td>{item.available ? "✅ Oui" : "❌ Non"}</Td>
                            <Td>
                                <ActionButton
                                    className={item.available ? "inactive" : "toggle"}
                                    onClick={(e) => { e.stopPropagation(); onToggle(item._id); }}
                                >
                                    {item.available ? "Désactiver" : "Activer"}
                                </ActionButton>
                            </Td>
                            <Td>
                                <ActionButton
                                    className="edit"
                                    onClick={(e) => { e.stopPropagation(); setSelectedItem(item); setShowModal(true); }}
                                >
                                    Modifier
                                </ActionButton>
                            </Td>
                            <Td>
                                <ActionButton
                                    className="delete"
                                    onClick={(e) => { e.stopPropagation(); onDelete(item._id); }}
                                >
                                    Supprimer
                                </ActionButton>
                            </Td>
                        </Tr>
                    )) : (
                        <Tr>
                            <Td colSpan="9" style={{ textAlign: "center", padding: "20px", color: "red" }}>
                                Aucun menu trouvé
                            </Td>
                        </Tr>
                    )}
                </tbody>
            </Table>

            {/* Pagination */}
            {totalPages > 1 && (
                <PaginationContainer>
                    <PageButton disabled={currentPage <= 1} onClick={handlePrevPage}>Précédent</PageButton>
                    <span>Page {currentPage} / {totalPages}</span>
                    <PageButton disabled={currentPage >= totalPages} onClick={handleNextPage}>Suivant</PageButton>
                </PaginationContainer>
            )}

            {showModal && selectedItem && (
                <ModalOverlay>
                    <ModalContent>
                        <h2>Détails du plat</h2>
                        <Img src={selectedItem.picture} alt={selectedItem.name} style={{ marginBottom: "10px" }} />
                        <Input
                            type="text"
                            value={selectedItem.name}
                            onChange={(e) => setSelectedItem({...selectedItem, name: e.target.value})}
                        />
                        <TextArea
                            rows={4}
                            value={selectedItem.description}
                            onChange={(e) => setSelectedItem({...selectedItem, description: e.target.value})}
                        />
                        <Input
                            type="number"
                            value={selectedItem.price}
                            onChange={(e) => setSelectedItem({...selectedItem, price: e.target.value})}
                        />
                        <Input
                            type="text"
                            value={selectedItem.category}
                            onChange={(e) => setSelectedItem({...selectedItem, category: e.target.value})}
                        />
                        <Input
                            type="text"
                            value={selectedItem.picture}
                            onChange={(e) => setSelectedItem({...selectedItem, picture: e.target.value})}
                        />
                        <div>
                            <ModalButton className="confirm" onClick={handleUpdate}>Enregistrer</ModalButton>
                            <ModalButton className="cancel" onClick={handleCancel}>Fermer</ModalButton>
                        </div>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
}

export default MenuTable;
