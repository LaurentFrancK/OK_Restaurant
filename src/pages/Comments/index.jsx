// ********* The comments page **************


// Import react's components
import styled from "styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";
import { comments } from "../../utils/Comments";

// Import project's components
import colors from "../../utils/colors";

// CSS rules
const CommentsContainer = styled.div`
    margin: 150px auto;
    max-width: 1000px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

const CommentCard = styled.div`
    max-width: 300px;
    max-height: 200px;
    background-color: ${colors.lightGrey || "#f5f5f5"};
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    align-items: flex-start;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
`

const ProfilePic = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`

const CommentContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const PseudoAndDate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Pseudo = styled.h4`
    margin: 0;
    font-size: 18px;
    color: ${colors.dark || "#333"};
`

const DateText = styled.span`
    font-size: 12px;
    color: ${colors.grey || "#777"};
`

const CommentText = styled.p`
    font-size: 16px;
    color: ${colors.dark || "#444"};
    margin: 10px 0;
`

const Stars = styled.div`
    display: flex;
    gap: 5px;
    color: ${colors.orange || "#FFA500"};
`

function ClientComments() {
    return (
        <CommentsContainer>
            {comments.map(({ id, pseudo, profilePic, comment, date, rating }) => (
                <CommentCard key={id}>
                    <ProfilePic src={profilePic} alt={`${pseudo} avatar`} />
                    <CommentContent>
                        <PseudoAndDate>
                            <Pseudo>{pseudo}</Pseudo>
                            <DateText>{date}</DateText>
                        </PseudoAndDate>
                        <Stars>
                            {Array.from({ length: 5 }, (_, index) =>
                                index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />
                            )}
                        </Stars>
                        <CommentText>{comment}</CommentText>
                    </CommentContent>
                </CommentCard>
            ))}
        </CommentsContainer>
    );
}

export default ClientComments;
