
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const approvalSteps = [
  {
    step: 1,
    title: "Criação do Evento",
    role: "Professor",
    description: "Professor propõe um evento com todos os detalhes necessários",
    color: "bg-college-blue/10",
    delay: 100,
  },
  {
    step: 2,
    title: "Revisão Inicial",
    role: "Coordenador",
    description: "Coordenador analisa viabilidade acadêmica e adequação",
    color: "bg-college-red/10",
    delay: 200,
  },
  {
    step: 3,
    title: "Aprovação Final",
    role: "Secretaria",
    description: "Secretaria valida e confirma disponibilidade de recursos",
    color: "bg-college-blue/10",
    delay: 300,
  },
  {
    step: 4,
    title: "Publicação",
    role: "Sistema",
    description: "Evento é publicado e disponibilizado para inscrições",
    color: "bg-college-red/10",
    delay: 400,
  },
];

const pendingApprovals = [
  {
    id: "EVT-2023-045",
    title: "Workshop de Design Thinking",
    creator: "Profa. Ana Santos",
    submitted: "2023-10-28",
    department: "Computação",
    status: "Revisão Coordenador",
  },
  {
    id: "EVT-2023-046",
    title: "Palestra: Mercado Financeiro",
    creator: "Prof. Carlos Mendes",
    submitted: "2023-10-30",
    department: "Administração",
    status: "Aprovação Secretaria",
  },
  {
    id: "EVT-2023-047",
    title: "Curso de Excel Avançado",
    creator: "Prof. Ricardo Alves",
    submitted: "2023-11-02",
    department: "Ciências Contábeis",
    status: "Revisão Coordenador",
  },
];

const Approvals = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4 animate-fade-in">
        <h1 className="text-3xl font-bold tracking-tight">Módulo de Aprovações</h1>
        <p className="text-muted-foreground max-w-3xl">
          Fluxo de revisão e aprovação para todos os eventos institucionais.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Fluxo de Aprovação</h2>
        <div className="relative">
          <div className="absolute left-0 right-0 mx-auto h-1 top-1/2 transform -translate-y-1/2 bg-muted hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {approvalSteps.map((step) => (
              <Card 
                key={step.step} 
                className="border border-border z-10 bg-background animate-fade-in animate-slide-in"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <CardHeader className={`${step.color} text-center relative`}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background dark:bg-card rounded-full h-8 w-8 flex items-center justify-center border-2 border-college-blue dark:border-college-red">
                    <span className="text-sm font-bold">{step.step}</span>
                  </div>
                  <CardTitle className="text-md pt-2">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 text-center">
                  <Badge className="mb-2 bg-college-blue/20 text-college-blue dark:bg-college-red/20 dark:text-white">
                    {step.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4 mt-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
        <h2 className="text-2xl font-bold tracking-tight">Aprovações Pendentes</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Evento</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Criador</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Departamento</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Enviado em</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {pendingApprovals.map((approval, index) => (
                <tr 
                  key={approval.id} 
                  className="border-b border-border hover:bg-muted/30 transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${600 + (index * 100)}ms` }}
                >
                  <td className="px-4 py-3 text-sm">{approval.id}</td>
                  <td className="px-4 py-3 text-sm font-medium">{approval.title}</td>
                  <td className="px-4 py-3 text-sm">{approval.creator}</td>
                  <td className="px-4 py-3 text-sm">{approval.department}</td>
                  <td className="px-4 py-3 text-sm">{new Date(approval.submitted).toLocaleDateString('pt-BR')}</td>
                  <td className="px-4 py-3 text-sm">
                    <Badge variant="outline" className={
                      approval.status.includes("Coordenador") 
                        ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" 
                        : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    }>
                      {approval.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Card className="border border-border mt-8 animate-fade-in" style={{ animationDelay: '900ms' }}>
        <CardHeader>
          <CardTitle>Critérios de Aprovação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-medium">Análise do Projeto</h3>
              <p className="text-sm text-muted-foreground">
                Avaliação da qualidade, relevância e contribuição acadêmica do evento proposto
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Verificação de Recursos</h3>
              <p className="text-sm text-muted-foreground">
                Análise da disponibilidade de espaços, equipamentos e orçamento necessários
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Alinhamento Institucional</h3>
              <p className="text-sm text-muted-foreground">
                Conformidade com as políticas educacionais e valores da instituição
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Approvals;
