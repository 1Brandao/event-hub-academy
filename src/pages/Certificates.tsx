
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certificateFeatures = [
  {
    title: "Geração Automática",
    description: "Certificados gerados automaticamente após conclusão do evento",
    icon: "📄",
    delay: 100,
  },
  {
    title: "Assinaturas Digitais",
    description: "Assinaturas digitais do coordenador e secretaria acadêmica",
    icon: "✒️",
    delay: 200,
  },
  {
    title: "Código de Verificação",
    description: "Código único para validação da autenticidade do certificado",
    icon: "🔐",
    delay: 300,
  },
  {
    title: "Opção de Impressão",
    description: "Certificados disponíveis em formato digital para impressão",
    icon: "🖨️",
    delay: 400,
  },
];

const sampleCertificates = [
  {
    id: "CERT-2023-1258",
    event: "Workshop de Design Thinking",
    date: "2023-09-15",
    hours: 8,
    status: "Disponível",
  },
  {
    id: "CERT-2023-1198",
    event: "Curso de Excel Avançado",
    date: "2023-08-30",
    hours: 12,
    status: "Disponível",
  },
  {
    id: "CERT-2023-1302",
    event: "Simpósio de Sustentabilidade",
    date: "2023-10-20",
    hours: 20,
    status: "Pendente",
  },
];

const Certificates = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4 animate-fade-in">
        <h1 className="text-3xl font-bold tracking-tight">Módulo de Certificados</h1>
        <p className="text-muted-foreground max-w-3xl">
          Geração e verificação de certificados para participantes de eventos acadêmicos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {certificateFeatures.map((feature) => (
          <Card 
            key={feature.title} 
            className="border border-border animate-fade-in animate-slide-in"
            style={{ animationDelay: `${feature.delay}ms` }}
          >
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-college-blue/10 dark:bg-college-red/10 flex items-center justify-center text-xl">
                {feature.icon}
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12 space-y-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
        <h2 className="text-2xl font-bold tracking-tight">Meus Certificados</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Código</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Evento</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Data</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Carga Horária</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Ações</th>
              </tr>
            </thead>
            <tbody>
              {sampleCertificates.map((cert, index) => (
                <tr 
                  key={cert.id} 
                  className="border-b border-border hover:bg-muted/30 transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${700 + (index * 100)}ms` }}
                >
                  <td className="px-4 py-3 text-sm font-mono">{cert.id}</td>
                  <td className="px-4 py-3 text-sm font-medium">{cert.event}</td>
                  <td className="px-4 py-3 text-sm">{new Date(cert.date).toLocaleDateString('pt-BR')}</td>
                  <td className="px-4 py-3 text-sm">{cert.hours}h</td>
                  <td className="px-4 py-3 text-sm">
                    <Badge className={
                      cert.status === "Disponível" 
                        ? "bg-green-500" 
                        : "bg-yellow-500"
                    }>
                      {cert.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-sm text-center">
                    {cert.status === "Disponível" && (
                      <button className="p-1.5 rounded-md bg-college-blue text-white text-xs hover:bg-college-blue/90 transition-colors">
                        Baixar
                      </button>
                    )}
                    {cert.status === "Pendente" && (
                      <span className="text-xs text-muted-foreground">Aguardando</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 animate-fade-in" style={{ animationDelay: '1000ms' }}>
        <Card className="border border-border overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-college-blue to-college-red text-white">
            <CardTitle>Modelo de Certificado</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-8 bg-white dark:bg-card border-b border-border">
              <div className="max-w-3xl mx-auto border border-college-blue/20 p-10 bg-white dark:bg-card text-foreground rounded-md">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-college-blue dark:text-college-red font-bold text-2xl">FACULDADE CONNECT</h2>
                    <p className="text-muted-foreground">Certificado de Participação</p>
                  </div>
                  
                  <div className="w-full border-t border-b border-border py-6 space-y-4">
                    <p className="text-xl">Certificamos que</p>
                    <p className="text-2xl font-semibold">Nome do Participante</p>
                    <p className="text-base">
                      participou do evento <strong>Título do Evento</strong>, 
                      realizado no período de <strong>DD/MM/AAAA</strong> a <strong>DD/MM/AAAA</strong>, 
                      com carga horária total de <strong>XX horas</strong>.
                    </p>
                  </div>
                  
                  <div className="pt-4 w-full flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center">
                      <div className="w-40 border-t border-college-blue/50 dark:border-college-red/50 pt-2">
                        <p className="text-sm font-medium">Coordenador</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-40 border-t border-college-blue/50 dark:border-college-red/50 pt-2">
                        <p className="text-sm font-medium">Secretaria Acadêmica</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full flex justify-between items-center text-xs text-muted-foreground pt-6">
                    <p>Código de verificação: XXXX-XXXX-XXXX</p>
                    <p>Data de emissão: DD/MM/AAAA</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Certificates;
