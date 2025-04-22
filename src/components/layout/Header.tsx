
import React from "react";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { toast } from "sonner";

const navItems = [
  { name: "Início", path: "/" },
  { name: "Usuários", path: "/users" },
  { name: "Eventos", path: "/events" },
  { name: "Aprovações", path: "/approvals" },
  { name: "Certificados", path: "/certificates" },
];

export const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    toast.success("Logout realizado com sucesso");
    navigate("/login");
  };
  
  // First letter of user's name or "?" if no user
  const userInitial = user ? user.name.charAt(0).toUpperCase() : "?";
  
  // Simple function to get a color based on user role
  const getUserRoleColor = () => {
    if (!user) return "bg-muted";
    
    switch(user.role) {
      case "aluno": return "bg-blue-500";
      case "professor": return "bg-green-500";
      case "coordenador": return "bg-purple-500";
      case "secretaria": return "bg-orange-500";
      default: return "bg-muted";
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border transition-all duration-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-college-red flex items-center justify-center">
            <span className="text-white font-bold text-sm">CS</span>
          </div>
          <span className="font-semibold text-xl tracking-tight text-college-blue dark:text-white">
            CEPEX SYSTEM
          </span>
        </div>

        {user && (
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-college-blue text-white"
                    : "text-foreground hover:bg-college-blue/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4">
          <ThemeSwitch />
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 h-8 w-8 rounded-full">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${getUserRoleColor()}`}>
                    {userInitial}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>{user.name}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="mr-2 h-4 w-4 inline-block text-xs font-semibold text-center">ID</span>
                    <span>{user.registrationNumber}</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" size="sm" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
