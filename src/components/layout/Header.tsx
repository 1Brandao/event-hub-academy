
import React from "react";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Início", path: "/" },
  { name: "Usuários", path: "/users" },
  { name: "Eventos", path: "/events" },
  { name: "Aprovações", path: "/approvals" },
  { name: "Certificados", path: "/certificates" },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border transition-all duration-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-college-red flex items-center justify-center">
            <span className="text-white font-bold text-sm">FC</span>
          </div>
          <span className="font-semibold text-xl tracking-tight text-college-blue dark:text-white">
            Faculdade Connect
          </span>
        </div>

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

        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <div className="h-8 w-8 rounded-full bg-college-blue/20 flex items-center justify-center">
            <span className="text-college-blue dark:text-white text-sm">A</span>
          </div>
        </div>
      </div>
    </header>
  );
};
