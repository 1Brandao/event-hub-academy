import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Layout } from "./components/layout/Layout";

import Index from "./pages/Index";
import Users from "./pages/Users";
import Events from "./pages/Actives";
import Approvals from "./pages/Approvals";
import Certificates from "./pages/Certificates";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { UserFeedback } from "./components/feedback/UserFeedback";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Carregando...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/" replace />
            ) : (
              <Layout>
                <Login />
              </Layout>
            )
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            </Layout>
          }
        />
        <Route
          path="/users"
          element={
            <Layout>
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout>
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            </Layout>
          }
        />
        <Route
          path="/approvals"
          element={
            <Layout>
              <ProtectedRoute>
                <Approvals />
              </ProtectedRoute>
            </Layout>
          }
        />
        <Route
          path="/certificates"
          element={
            <Layout>
              <ProtectedRoute>
                <Certificates />
              </ProtectedRoute>
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
      <UserFeedback />
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppRoutes />
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
