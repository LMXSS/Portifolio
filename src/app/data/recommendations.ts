export interface Recommendation {
    name: string;
    position: string;
    company: string;
    photo: string;
    text: string;
  }
  
  export const recommendations: Recommendation[] = [
    {
      name: "João Silva",
      position: "Gerente de Tecnologia",
      company: "Tech Solutions",
      photo: "/images/joao-silva.jpg",  // Caminho da imagem dentro de 'public/images/'
      text: "Gabriel é um profissional extremamente dedicado e com uma capacidade técnica impressionante. Tive o prazer de trabalhar com ele em diversos projetos e sempre entregou resultados de alta qualidade, com grande atenção aos detalhes e ao processo de desenvolvimento."
    },
    {
      name: "Maria Oliveira",
      position: "Coordenadora de TI",
      company: "InovaTech",
      photo: "/images/maria-oliveira.jpg",  // Caminho da imagem dentro de 'public/images/'
      text: "Gabriel demonstrou uma grande habilidade em resolver problemas complexos de desenvolvimento de software. Ele sempre foi proativo em buscar novas soluções e está sempre disposto a aprender e compartilhar conhecimento com a equipe."
    },
    {
      name: "Carlos Souza",
      position: "CTO",
      company: "DevMasters",
      photo: "/images/carlos-souza.jpg",  // Caminho da imagem dentro de 'public/images/'
      text: "Trabalhei com o Gabriel em projetos de grande escala, onde ele se destacou por sua capacidade de trabalhar sob pressão e sua excelente comunicação com a equipe. Ele sempre foi confiável e sempre superou nossas expectativas."
    },
    {
      name: "Ana Costa",
      position: "Líder de Desenvolvimento",
      company: "Tech Innovators",
      photo: "/images/ana-costa.jpg",  // Caminho da imagem dentro de 'public/images/'
      text: "Gabriel é um dos profissionais mais comprometidos que já trabalhei. Sua habilidade de entender rapidamente as necessidades dos projetos e entregar soluções eficientes é admirável. Ele também é uma pessoa que agrega muito à cultura da equipe."
    }
  ];
  