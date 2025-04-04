
import React, { createContext, useContext, useState, useEffect } from "react";

// User type definition
export interface User {
  id: string;
  name: string;
  email: string;
  role: "aluno" | "professor" | "coordenador" | "secretaria";
  department?: string;
  registrationNumber?: string;
}

// Auth context type
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration (in a real app, this would come from a database)
const mockUsers: User[] = [
  {
    id: "1",
    name: "Aluno Exemplo",
    email: "aluno@faculdade.com",
    role: "aluno",
    registrationNumber: "2023001",
  },
  {
    id: "2",
    name: "Professor Exemplo",
    email: "professor@faculdade.com",
    role: "professor",
    department: "Engenharia",
    registrationNumber: "P2023001",
  },
  {
    id: "3",
    name: "Coordenador Exemplo",
    email: "coordenador@faculdade.com",
    role: "coordenador",
    department: "Administração",
    registrationNumber: "C2023001",
  },
  {
    id: "4",
    name: "Secretaria Exemplo",
    email: "secretaria@faculdade.com",
    role: "secretaria",
    department: "Secretaria Acadêmica",
    registrationNumber: "S2023001",
  },
];

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check for saved user on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // For demo purposes, password is checked only as non-empty
      if (!password) {
        throw new Error("Senha não pode estar vazia");
      }
      
      const foundUser = mockUsers.find(u => u.email === email);
      
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem("user", JSON.stringify(foundUser));
      } else {
        throw new Error("Usuário não encontrado");
      }
    } catch (err: any) {
      setError(err.message || "Falha ao realizar login");
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
