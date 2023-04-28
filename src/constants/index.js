import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    iplace,
    mylogo,
    lab,
    moneycontroller,
    lesscone,
    mytube,
    scrillix,
    socialdogs,
    brovick,
    hoobank,
    fitnessapp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Trabalhos",
    },
    {
      id: "contact",
      title: "Contatos",
    },
  ];
  
  const services = [
    {
      title: "Desenvolvedor WEB",
      icon: web,
    },
    {
      title: "Desenvolvedor React",
      icon: mobile,
    },
    {
      title: "Front End Developer",
      icon: backend,
    },
    {
      title: "Formado em ADS",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ]
  
  const experiences = [
    {
      title: "Consultor de vendas e assitência de software IOS",
      company_name: "iPlace",
      icon: iplace,
      iconBg: "#E6DEDD",
      date: "Novembro 2019 - Novembro 2020",
      points: [
        "Responsável pela apresentação dos produtos Apple direto aos clientes.",
        "Entender e ter amplo conhecimento do sistema operacional IOS.",
        "Dar assistência de software nos smartphones de clientes.",
      ],
    },
    {
      title: "Desenvolvedor Front End",
      company_name: "Freelancer",
      icon: mylogo,
      iconBg: "#E6DEDD",
      date: "Novembro 2021 - Atual",
      points: [
        "Responsável por desenvolver interfaces de usuário, landing pages e páginas institucionais.",
        "Usando tecnologias com React, JavaScript, HTML e CSS. E trabalhando consumindo APIs com Context e Axios.",
        "Dar manutenção e resolver erros nos sistemas client side.",
        "Prototipar projetos usando o Figma.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "MyTube",
      description:
        "Projeto criado utilizando uma API do youtube. Como admirador da plataforma, fiquei inspirado em criar uma versão dessa grande plataforma.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "pink-text-gradient",
        },
      ],
      image: mytube,
      source_code_link: "https://github.com/cadugomes06/YouTube-clone-",
      source_view_link: "https://maiyoutube.netlify.app/"
    },
    {
      name: "HooBank",
      description:
        "Um banco digital com design super moderno extraido de um projeto no Figma, utilizando Tailwind e React. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: hoobank,
      source_code_link: "https://github.com/cadugomes06/banco-Hoobank",
      source_view_link: 'https://hoobank.netlify.app/'
    },
    {
      name: "Money-controller",
      description:
        "Um grande App de controle financeiro. Um software que me ajuda de forma simples a por valores de entra e saída, e descrever os gastos com produtos e serviços.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: moneycontroller,
      source_code_link: "https://github.com/cadugomes06/money-controller",
      source_view_link: 'https://moneycontroller.netlify.app/'
    },
    {
      name: "SocialDogs",
      description:
        "Isso mesmo, uma social para cachorros! Nessa rede social é possível criar sua conta, postar fotos no feed e ainda interagir com outros usuários.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "useContext",
          color: "pink-text-gradient",
        },
      ],
      image: socialdogs,
      source_code_link: "https://github.com/cadugomes06/Social-Dogs",
      source_view_link: 'https://socialdogs.netlify.app/'
    },
    {
      name: "Preparador de exame",
      description:
        "Projeto criado para o maior laboratório clínico da minha cidade (Hemolabes). Sendo capaz de gerar instruções de exames dinâmicamente e armazenar arquivos de forma organizada.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: lab,
      source_code_link: "https://github.com/cadugomes06/Preparo-de-Exame",
      source_view_link: 'https://preparo.netlify.app/'
    },
    {
      name: "Fitness App",
      description:
        "Um aplicativo de exercícios online. Com esse super App você pode visualizar grupos de exercícios para montar seu treino e aprender com movimento com cada animação.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: fitnessapp,
      source_code_link: "https://github.com/cadugomes06/Fitness-app",
      source_view_link: 'https://fitnessbox-app.netlify.app/'
    },
    {
      name: "Relojoaria Brovick",
      description:
        "Uma loja virtual de relógios. sendo capaz de simular uma comprar de e-commerce até o setor de carrinho com produtos e contagem",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: brovick,
      source_code_link: "https://github.com/cadugomes06/relojoaria-brovick",
      source_view_link: 'https://brovick.netlify.app/'
    },
    {
      name: "YouthGlass",
      description:
        "Uma loja de institucional de óculos com 7 páginas bem estilizadas. A youthGlass é uma marca de óculos com público jovem.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: scrillix,
      source_code_link: "https://github.com/cadugomes06/youthGlass",
      source_view_link: 'https://youthglass.netlify.app/'
    },
    {
      name: "Restaurante Less Cone",
      description:
        "Um restaurante incrível feito utilizando HTML e CSS com SASS para sua estilização e reaproveitamento de estilo.",
      tags: [
        {
          name: "SASS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
      ],
      image: lesscone,
      source_code_link: "https://github.com/cadugomes06/Restaurante-Les-cone",
      source_view_link: 'https://lesscone.netlify.app/'
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };