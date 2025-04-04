
import React from "react";
import { Header } from "./Header";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  
  // Don't show footer on login page
  const showFooter = !isLoginPage || user;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      {showFooter && (
        <footer className="py-6 border-t border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
          <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Faculdade Connect. Todos os direitos reservados.
          </div>
        </footer>
      )}
    </div>
  );
};
