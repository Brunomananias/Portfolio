import project1 from "../../public/images/gym.jpg";
import project2 from "../../public/images/minikids.jpg";
import project3 from "../../public/images/financas.png";

export const EXPERIENCES = [
  {
    ano: "2024 - Atualmente",
    cargo: "Analista Desenvolvedor Júnior IV",
    empresa: "Saga WMS",
    descricao:
      "Atuo como desenvolvedor full stack, sendo responsável por todo ciclo de desenvolvimento dos sistemas da empresa, tanto em soluções legadas como na arquitetura de sistemas web mais modernos, abrangendo desde a criação de novas funcionalidades até a manutenção e modernização das plataformas.",
    tecnologias: ["React", "Typescript", "Tailwind", "C#", ".NET", "Oracle"],
  },
  {
    ano: "2023 - 2024",
    cargo: "Programador Júnior",
    empresa: "Contenco",
    descricao:
      "Atuei na manutenção e evolução de sistemas legados, com foco na conversão de softwares desenvolvidos em VB.NET para C#, além da implementação de novas funcionalidades. ",
    tecnologias: ["VB.NET", "C#", ".NET", "SQLserver"],
  },
  {
    ano: "2022 - 2023",
    cargo: "Estágio em Desenvolvimento de Software",
    empresa: "Contenco",
    descricao:
      "Atuei no desenvolvimento de sistemas utilizando Visual Basic.NET com o framework 4.7.2 para Windows Forms, realizando integração com bancos de dados por meio de comandos SQL. Fui responsável pela criação de gráficos utilizando a ferramenta ChartDirector e pela geração de relatórios com SAP Crystal Reports dentro da IDE Microsoft Visual Studio. Além disso, desenvolvi kits de instalação (setup) dos softwares Pavitest, realizei instalações remotas nos clientes e forneci suporte técnico operacional. Também fui responsável pela atualização de manuais de instrução, elaboração de tutoriais, organização de conteúdo para backup no servidor da empresa e exportação de dados adquiridos pelos softwares Pavitest para planilhas de dados.",
    tecnologias: ["VB.NET", "C#", ".NET", "SQLserver"],
  },
];

export const PROJECTS = [
  {
    titulo: "GYM website",
    image: project1,
    descricao:
      "Um site simples de uma academia feito utilizando apenas o frontend",
    tecnologias: ["React", "Typescript", "Tailwind"],
  },
  {
    titulo: "Sistema de Gestão Minikids",
    image: project2,
    descricao:
      "Desenvolvi um sistema de gestão completo para auxiliar no negócio de recreação da minha esposa. Utilizei autenticação JWT para maior segurança no login.",
    tecnologias: ["React", "Typescript", "C#", ".NET", "ApiRest"],
  },
  {
    titulo: "Sistema de Finanças Pessoais",
    image: project3,
    descricao:
      "Desenvolvi um sistema de finanças completo para auxiliar nas minhas finanças pessoais",
    tecnologias: ["React", "Typescript", "C#", ".NET", "ApiRest"],
  },
];
