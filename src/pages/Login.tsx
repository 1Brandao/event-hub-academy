
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";

// Form schema
const loginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  password: z.string().min(1, "Senha é obrigatória"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = async (values: LoginFormValues) => {
    try {
      await login(values.email, values.password);
      toast.success("Login realizado com sucesso!");
      navigate("/");
    } catch (err) {
      // Error is handled in the context
    }
  };
  
  // Show error toast if there's an error
  React.useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  
  // Demo account info
  const demoAccounts = [
    { type: "Aluno", email: "aluno@faculdade.com" },
    { type: "Professor", email: "professor@faculdade.com" },
    { type: "Coordenador", email: "coordenador@faculdade.com" },
    { type: "Secretaria", email: "secretaria@faculdade.com" },
  ];

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8 p-8 bg-card rounded-lg border shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">CEPEX SYSTEM</h1>
          <p className="text-muted-foreground mt-2">
            Acesso ao sistema de gestão acadêmica
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seu.email@faculdade.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </Form>
        
        <div className="mt-8 border-t pt-6">
          <h3 className="text-sm font-medium text-center mb-3">Contas para demonstração:</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {demoAccounts.map((account) => (
              <div key={account.email} className="bg-muted p-2 rounded">
                <strong>{account.type}:</strong> {account.email}
                <br />
                <strong>Senha:</strong> qualquer texto
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
