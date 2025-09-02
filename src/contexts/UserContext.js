// FILE: UserContext.js

import { createContext, useState, useEffect } from "react";

// Crée le contexte
export const UserContext = createContext();

// Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);       // infos utilisateur
  const [token, setToken] = useState(null);     // JWT

  // Au démarrage, récupérer le token stocké dans localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = JSON.parse(localStorage.getItem("user")); // si tu veux stocker les infos
    if (savedToken) setToken(savedToken);
    if (savedUser) setUser(savedUser);
  }, []);

  // Fonction pour connecter l'utilisateur
  const loginUser = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Fonction pour déconnecter l'utilisateur
  const logoutUser = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, token, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
