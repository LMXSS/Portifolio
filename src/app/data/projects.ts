// src/data/projects.ts

export type Project = {
  title: string;
  description: string;
  link: string; // Adicionando a propriedade link
};

export const projects: Project[] = [
  {
    title: 'Projeto 1',
    description: 'Descrição do Projeto 1',
    link: 'https://github.com/seuusuario/projeto1', // Link para o GitHub do projeto
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2',
    link: 'https://github.com/seuusuario/projeto2',
  },
  // Adicione mais projetos conforme necessário
];
