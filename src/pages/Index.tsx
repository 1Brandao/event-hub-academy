import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Index = () => {
  const modules = [
    {
      title: "Usuários",
      description: "Gerencie alunos, professores, coordenadores e secretarias",
      path: "/users",
      color: "bg-college-blue/10",
      textColor: "text-college-blue",
      delay: "animate-delay-100",
    },
    {
      title: "Eventos",
      description: "Crie e gerencie diversos tipos de eventos acadêmicos",
      path: "/events",
      color: "bg-college-red/10",
      textColor: "text-college-red",
      delay: "animate-delay-200",
    },
    {
      title: "Aprovações",
      description: "Fluxo de revisão e aprovação de eventos",
      path: "/approvals",
      color: "bg-college-blue/10",
      textColor: "text-college-blue",
      delay: "animate-delay-300",
    },
    {
      title: "Certificados",
      description: "Geração e validação de certificados de participação",
      path: "/certificates",
      color: "bg-college-red/10",
      textColor: "text-college-red",
      delay: "animate-delay-400",
    },
  ];

  return (
    <div className="space-y-10 py-6">
      <section className="text-center space-y-4 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-college-blue dark:text-white">CEPEX </span>
          <span className="text-college-red">SYSTEM</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Plataforma integrada para gerenciamento de eventos e processos acadêmicos
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {modules.map((module, index) => (
          <Link
            to={module.path}
            key={module.title}
            className="group animate-fade-in animate-slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] border border-border">
              <CardHeader className={`${module.color}`}>
                <h2 className={`text-xl font-semibold ${module.textColor}`}>
                  {module.title}
                </h2>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground">{module.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      <section className="rounded-lg glass p-8 mt-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Gestão acadêmica simplificada</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa plataforma fornece ferramentas intuitivas para todos os perfis da instituição, 
            facilitando a criação, aprovação e participação em processos acadêmicos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
