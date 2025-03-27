
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const eventTypes = [
  {
    type: "Eventos Institucionais",
    examples: ["Aula inaugural", "Semana acadêmica", "Encontro de egressos"],
    color: "bg-college-blue text-white",
  },
  {
    type: "Monitorias",
    examples: ["Monitoria de Cálculo", "Monitoria de Programação", "Grupo de estudos"],
    color: "bg-college-red text-white",
  },
  {
    type: "Projetos de Extensão",
    examples: ["Atendimento comunitário", "Oficinas culturais", "Ações sociais"],
    color: "bg-college-blue text-white",
  },
  {
    type: "Projetos de Pesquisa",
    examples: ["Iniciação científica", "Grupos de pesquisa", "Desenvolvimento de produtos"],
    color: "bg-college-red text-white",
  },
  {
    type: "Eventos Acadêmicos",
    examples: ["Congressos", "Seminários", "Simpósios", "Jornadas"],
    color: "bg-college-blue text-white",
  },
  {
    type: "Workshops e Cursos",
    examples: ["Cursos de curta duração", "Workshops técnicos", "Capacitações"],
    color: "bg-college-red text-white",
  },
];

const sampleEvents = [
  {
    title: "Semana da Tecnologia",
    type: "Evento Acadêmico",
    start: "2023-11-10",
    end: "2023-11-15",
    status: "Aprovado",
    budget: "Com orçamento",
    description: "Semana dedicada a palestras e workshops sobre tecnologias emergentes."
  },
  {
    title: "Monitoria de Programação Web",
    type: "Monitoria",
    start: "2023-10-05",
    end: "2023-12-15",
    status: "Aprovado",
    budget: "Sem orçamento",
    description: "Aulas complementares para desenvolvimento web com React e Node.js."
  },
  {
    title: "Simpósio de Inteligência Artificial",
    type: "Evento Acadêmico",
    start: "2023-12-08",
    end: "2023-12-09",
    status: "Pendente",
    budget: "Com orçamento",
    description: "Discussões sobre avanços e aplicações de IA no mercado atual."
  },
];

const Events = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4 animate-fade-in">
        <h1 className="text-3xl font-bold tracking-tight">Módulo de Eventos</h1>
        <p className="text-muted-foreground max-w-3xl">
          Crie e gerencie diferentes tipos de eventos acadêmicos com aprovação integrada.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventTypes.map((event, index) => (
          <Card 
            key={event.type} 
            className="border border-border animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className={`${event.color}`}>
              <CardTitle className="text-lg">{event.type}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-1">
                {event.examples.map((example) => (
                  <li key={example} className="text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-college-blue dark:bg-college-red"></span>
                    {example}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-6 mt-10 animate-fade-in" style={{ animationDelay: '800ms' }}>
        <h2 className="text-2xl font-bold tracking-tight">Eventos Recentes</h2>
        
        <div className="space-y-4">
          {sampleEvents.map((event, index) => (
            <Card 
              key={event.title} 
              className="border border-border overflow-hidden animate-fade-in hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${800 + (index * 100)}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-xl">{event.title}</h3>
                      <Badge variant={event.status === "Aprovado" ? "default" : "secondary"} className={
                        event.status === "Aprovado" ? "bg-green-500" : "bg-yellow-500"
                      }>
                        {event.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline" className="bg-college-blue/10">{event.type}</Badge>
                      <Badge variant="outline" className="bg-college-red/10">{event.budget}</Badge>
                    </div>
                  </div>
                  <div className="text-sm text-right space-y-1 md:min-w-[140px]">
                    <div>
                      <span className="text-muted-foreground">Início:</span>{" "}
                      {new Date(event.start).toLocaleDateString('pt-BR')}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Término:</span>{" "}
                      {new Date(event.end).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border border-border mt-8 animate-fade-in" style={{ animationDelay: '1200ms' }}>
        <CardHeader>
          <CardTitle>Características dos Eventos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-medium">Orçamento</h3>
              <p className="text-sm text-muted-foreground">
                Definição de previsão orçamentária para recursos necessários
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Cronograma</h3>
              <p className="text-sm text-muted-foreground">
                Data de início e término, com programação detalhada
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Descrição</h3>
              <p className="text-sm text-muted-foreground">
                Detalhamento do evento, objetivos e público-alvo
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Status</h3>
              <p className="text-sm text-muted-foreground">
                Acompanhamento da situação: pendente, aprovado ou rejeitado
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;
