
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const userTypes = [
  {
    type: "Alunos",
    description: "Estudantes matriculados em cursos da instituição",
    permissions: ["Visualizar eventos", "Inscrever-se em eventos", "Emitir certificados"],
    color: "bg-college-blue/10",
    textColor: "text-college-blue",
  },
  {
    type: "Professores",
    description: "Docentes responsáveis por disciplinas e projetos",
    permissions: ["Criar eventos", "Propor projetos", "Gerenciar participantes"],
    color: "bg-college-red/10",
    textColor: "text-college-red",
  },
  {
    type: "Coordenadores",
    description: "Responsáveis por coordenar cursos e departamentos",
    permissions: ["Revisar eventos", "Aprovar projetos", "Acompanhar atividades"],
    color: "bg-college-blue/10",
    textColor: "text-college-blue",
  },
  {
    type: "Secretarias",
    description: "Equipe administrativa de suporte institucional",
    permissions: ["Aprovação final", "Gerenciar documentação", "Emitir relatórios"],
    color: "bg-college-red/10",
    textColor: "text-college-red",
  },
];

const Users = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4 animate-fade-in">
        <h1 className="text-3xl font-bold tracking-tight">Módulo de Usuários</h1>
        <p className="text-muted-foreground max-w-3xl">
          Gerencie os diferentes tipos de usuários da plataforma e suas permissões específicas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userTypes.map((user, index) => (
          <Card 
            key={user.type} 
            className="border border-border animate-fade-in animate-slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className={`${user.color} flex flex-row items-center justify-between`}>
              <CardTitle className={`text-xl ${user.textColor}`}>{user.type}</CardTitle>
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className={`${user.textColor} font-semibold`}>{user.type[0]}</span>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-foreground">{user.description}</p>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Permissões:</h3>
                <ul className="space-y-1">
                  {user.permissions.map((permission) => (
                    <li key={permission} className="text-sm flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-college-blue dark:bg-college-red"></span>
                      {permission}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border border-border mt-10 animate-fade-in" style={{ animationDelay: '500ms' }}>
        <CardHeader className="bg-gradient-to-r from-college-blue to-college-red/80">
          <CardTitle className="text-white">Características dos Usuários</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Identificação</h3>
                <p className="text-sm text-muted-foreground">
                  Cada usuário possui identificação única no sistema
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Matrícula</h3>
                <p className="text-sm text-muted-foreground">
                  Registro individual para autenticação e rastreabilidade
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Função/Papel</h3>
                <p className="text-sm text-muted-foreground">
                  Define permissões e acesso a recursos específicos
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Departamento</h3>
                <p className="text-sm text-muted-foreground">
                  Vinculação organizacional dentro da instituição
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
