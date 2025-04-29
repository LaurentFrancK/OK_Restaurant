// Import react components
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { teamMembers } from '../../utils/TeamMembers';
import colors from '../../utils/colors';

// CSS

const TeamPageContainer = styled.div`
    background: linear-gradient(135deg, ${colors.lightGrey} 0%, ${colors.subtleGrey} 100%);
    min-height: 100vh;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: ${colors.darkBlue};
    margin-top: 150px;
`;

const PageTitle = styled.h2`
    font-size: 36px;
    margin-bottom: 40px;
    color: ${colors.darkBlue};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px ${colors.lightOrange};
`;

const TeamMemberCard = styled.div`
    display: inline-block;
    width: 280px;
    margin: 20px;
    border-radius: 15px;
    overflow: hidden;
    background-color: ${colors.white};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, opacity 0.6s ease;
    opacity: 0;
    transform: translateY(100px);

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
    }

    &:nth-child(odd) {
        animation: fadeInLeft 0.7s forwards;
    }

    &:nth-child(even) {
        animation: fadeInRight 0.7s forwards;
    }

    @keyframes fadeInLeft {
        0% {
            opacity: 0;
            transform: translateX(-100px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeInRight {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

const ProfilePic = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

const MemberInfo = styled.div`
    padding: 20px;
    background-color: ${colors.lightGrey};
    text-align: center;
    border-radius: 0 0 15px 15px;
`;

const MemberName = styled.h3`
    font-size: 24px;
    color: ${colors.black};
    margin-bottom: 10px;
`;

const MemberRole = styled.p`
    font-size: 18px;
    color: ${colors.grey};
    margin-bottom: 10px;
`;

const MemberDescription = styled.p`
    font-size: 16px;
    color: ${colors.dark};
    margin-bottom: 20px;
`;

function OurTeamPage() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <TeamPageContainer>
            <PageTitle>Notre équipe</PageTitle>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {teamMembers.map(({ id, name, role, description, image }, index) => (
                    <TeamMemberCard key={id} style={loaded ? { opacity: 1, transform: 'translateY(0)' } : {}}>
                        <ProfilePic src={image} alt={name} />
                        <MemberInfo>
                            <MemberName>{name}</MemberName>
                            <MemberRole>{role}</MemberRole>
                            <MemberDescription>{description}</MemberDescription>
                        </MemberInfo>
                    </TeamMemberCard>
                ))}
            </div>
        </TeamPageContainer>
    );
}

export default OurTeamPage;
