// ******* Sign in page ********

import React, { useState } from "react"
import styled from "styled-components"
import { Eye, EyeOff } from "lucide-react" // Installe si nécessaire : npm install lucide-react

import colors from "../../utils/colors"

const SignInContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fcb045 0%, #fd1d1d 100%);
  padding: 60px;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 70px auto;
  padding: 40px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-size: 28px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fff;
  outline: none;

  &:focus {
    border-color: ${colors.primary || "#fcb045"};
    box-shadow: 0 0 5px ${colors.primary || "#fcb045"};
  }
`;

const PasswordToggle = styled.div`
  position: absolute;
  right: 14px;
  top: 38px;
  cursor: pointer;
  color: #888;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.primary || "#fcb045"};
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background-color: #e6962d;
  }
`;

const FooterText = styled.p`
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #333;

  a {
    color: #007bff;
    text-decoration: none;
    margin-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SignInContainer>
      <FormContainer>
        <Title>Créer un compte</Title>
        <form>
          <FormGroup>
            <Label htmlFor="prenom">Prénom</Label>
            <Input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="nom">Nom</Label>
            <Input type="text" id="nom" name="nom" placeholder="Votre nom" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" placeholder="Votre email" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Votre mot de passe"
              required
              minLength={6}
            />
            <PasswordToggle onClick={() => setShowPassword(prev => !prev)}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
          </FormGroup>

          <SubmitButton type="submit">S'inscrire</SubmitButton>
        </form>

        <FooterText>
          Déjà inscrit ?
          <a href="/login">Se connecter</a>
        </FooterText>
      </FormContainer>
    </SignInContainer>
  );
}

export default SignIn;
