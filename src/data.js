// Todo o conteúdo do site fica aqui. Para trocar texto ou imagem, mexa só neste arquivo.
// Os textos ficam em dois blocos: `pt` (Português) e `en` (Inglês). Ao mudar um, mude o outro também.

export const links = {
  behance: 'https://www.behance.net/luizstahl',
  instagram: 'https://www.instagram.com/stahl_xvi',
}

export const navIds = ['inicio', 'livery', 'roupas', 'design', 'ia']

// Imagens e layout de cada seção (iguais nos dois idiomas).
// span = quantas colunas (de 12) a imagem ocupa no computador; aspect = formato da caixa
const media = {
  livery: [
    { src: '/imagens/livery-1.jpg', span: 'md:col-span-12', aspect: 'aspect-video' },
    { src: '/imagens/livery-2.jpg', span: 'md:col-span-6', aspect: 'aspect-video' },
    { src: '/imagens/livery-3.jpg', span: 'md:col-span-6', aspect: 'aspect-video' },
  ],
  roupas: [
    { src: '/imagens/roupas-1.jpg', span: 'md:col-span-6', aspect: 'aspect-video' },
    { src: '/imagens/roupas-2.jpg', span: 'md:col-span-6', aspect: 'aspect-video' },
  ],
  design: [
    { src: '/imagens/design-1.jpg', span: 'md:col-span-6', aspect: 'aspect-[4/5]' },
    { src: '/imagens/design-2.jpg', span: 'md:col-span-6', aspect: 'aspect-[4/5]' },
    { src: '/imagens/design-3.jpg', span: 'md:col-span-12', aspect: 'aspect-[3/1]' },
    { src: '/imagens/design-4.jpg', span: 'md:col-span-12', aspect: 'aspect-[3/1]' },
  ],
  ia: [
    { src: '/imagens/ia-1.jpg', span: 'md:col-span-8 md:row-span-2', aspect: 'aspect-video md:aspect-auto md:h-full' },
    { src: '/imagens/ia-2.jpg', span: 'md:col-span-4', aspect: 'aspect-[16/10]' },
    { src: '/imagens/ia-3.jpg', span: 'md:col-span-4', aspect: 'aspect-[16/10]' },
  ],
}

const pt = {
  htmlLang: 'pt-BR',
  description: 'Luiz Stahl — Graphic Designer, Livery Maker e Texture for clothes.',
  nav: { inicio: 'Início', livery: 'Livery', roupas: 'Roupas', design: 'Design', ia: 'IA' },
  ui: {
    skip: 'Pular para o conteúdo',
    menu: 'Menu',
    language: 'Idioma',
    heroTag: 'Portfólio · Freelancer desde 2022',
    seeWork: 'Ver trabalhos ↓',
    aboutTag: 'Sobre mim',
    aboutTitle: ['Arte digital', 'com', 'identidade'],
    contactTag: 'Contato',
    contactTitle: ['Bora criar', 'algo junto?'],
    enlarge: 'Ampliar imagem',
    close: 'Fechar',
    prev: 'Anterior',
    next: 'Próxima',
  },
  roles: ['Graphic Designer', 'Livery Maker', 'Texture for clothes'],
  about: {
    paragraphs: [
      'Trabalho como Designer Gráfico Júnior e atuo como freelancer desde 2022, desenvolvendo artes digitais para diferentes tipos de projetos. Tenho experiência com Adobe Photoshop e Adobe Illustrator, utilizados para edição e tratamento de imagens, criação de logotipos, desenvolvimento de identidades visuais e produção de materiais gráficos personalizados.',
      'Também utilizo ferramentas de inteligência artificial, como Stable Diffusion, para auxiliar na criação e refinamento de imagens por meio da elaboração de prompts, tornando o processo criativo mais eficiente.',
      'Atualmente estou aprofundando meus conhecimentos em Concept Art para a indústria de jogos e entretenimento. Meu objetivo é evoluir continuamente na profissão de Designer Gráfico, aprimorando minhas competências técnicas e criativas para contribuir cada vez mais com projetos de qualidade.',
    ],
    skills: ['Photoshop', 'Illustrator', 'Stable Diffusion', 'Identidade visual', 'Logotipos', 'Concept Art'],
    stats: [
      { value: '2022', label: 'Freelancer desde' },
      { value: '04', label: 'Áreas de atuação' },
      { value: '3D', label: 'Liveries e roupas' },
    ],
  },
  sections: {
    livery: {
      num: '01',
      kicker: 'Trabalhos',
      title: 'Livery',
      text: 'Criação de liveries para carros em ambientes 3D — do conceito visual à aplicação final no modelo.',
      callout: {
        title: 'O que é uma livery?',
        text: 'É o conjunto de cores, traços, texturas e símbolos que revestem a carroceria, transformando o veículo em uma obra de identidade. Mais do que uma pintura, é a assinatura estética de uma equipe, marca ou projeto — une arte e função, definindo a personalidade do carro.',
      },
      labels: ['Livery · 01', 'Livery · 02', 'Livery · 03'],
    },
    roupas: {
      num: '02',
      kicker: 'Trabalhos',
      title: 'Roupas',
      text: 'Atuo na criação de identidades visuais e estampas em ambientes 3D. Desenvolvo o conceito visual, a composição gráfica e a aplicação das artes diretamente nos modelos tridimensionais, criando designs prontos para projetos digitais e jogos.',
      labels: ['Roupas · 01', 'Roupas · 02'],
    },
    design: {
      num: '03',
      kicker: 'Trabalhos',
      title: 'Design',
      text: 'Banners, capas e identidades visuais com uma linguagem forte e marcante — unindo design, experimentação gráfica, contrastes e texturas para construir artes únicas e alinhadas a cada projeto.',
      labels: ['Poster · 01', 'Capa · 02', 'Banner · 03', 'Banner · 04'],
    },
    ia: {
      num: '04',
      kicker: 'Processo',
      title: 'IA',
      text: 'Uso Inteligência Artificial como apoio no processo criativo — por exemplo, para gerar personagens, partículas e efeitos que depois são tratados e integrados à livery. A composição, edição e identidade visual continuam sob meu controle criativo.',
      labels: ['Livery com IA · 01', 'Livery com IA · 02', 'Livery com IA · 03'],
    },
  },
}

const en = {
  htmlLang: 'en',
  description: 'Luiz Stahl — Graphic Designer, Livery Maker and Texture for clothes.',
  nav: { inicio: 'Home', livery: 'Livery', roupas: 'Clothing', design: 'Design', ia: 'AI' },
  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    language: 'Language',
    heroTag: 'Portfolio · Freelancing since 2022',
    seeWork: 'See my work ↓',
    aboutTag: 'About me',
    aboutTitle: ['Digital art', 'with', 'identity'],
    contactTag: 'Contact',
    contactTitle: ["Let's create", 'together?'],
    enlarge: 'Enlarge image',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
  },
  roles: ['Graphic Designer', 'Livery Maker', 'Texture for clothes'],
  about: {
    paragraphs: [
      "I work as a Junior Graphic Designer and have been freelancing since 2022, creating digital art for many kinds of projects. I'm experienced with Adobe Photoshop and Adobe Illustrator, which I use for photo editing and retouching, logo design, visual identity development and custom graphic materials.",
      'I also use artificial intelligence tools such as Stable Diffusion to help create and refine images through prompt writing, making the creative process more efficient.',
      "I'm currently deepening my knowledge of Concept Art for the games and entertainment industry. My goal is to keep growing as a Graphic Designer, sharpening my technical and creative skills to contribute to more and more high-quality projects.",
    ],
    skills: ['Photoshop', 'Illustrator', 'Stable Diffusion', 'Visual identity', 'Logos', 'Concept Art'],
    stats: [
      { value: '2022', label: 'Freelancing since' },
      { value: '04', label: 'Areas of work' },
      { value: '3D', label: 'Liveries & clothing' },
    ],
  },
  sections: {
    livery: {
      num: '01',
      kicker: 'Work',
      title: 'Livery',
      text: 'Car liveries designed for 3D environments — from the visual concept to the final application on the model.',
      callout: {
        title: 'What is a livery?',
        text: "It's the set of colors, lines, textures and symbols that cover a car's body, turning the vehicle into a piece of identity. More than a paint job, it's the visual signature of a team, brand or project — blending art and function to define the car's personality.",
      },
      labels: ['Livery · 01', 'Livery · 02', 'Livery · 03'],
    },
    roupas: {
      num: '02',
      kicker: 'Work',
      title: 'Clothing',
      text: 'I create visual identities and prints in 3D environments. I develop the visual concept and the graphic composition, and apply the artwork directly onto 3D models, delivering designs ready for digital projects and games.',
      labels: ['Clothing · 01', 'Clothing · 02'],
    },
    design: {
      num: '03',
      kicker: 'Work',
      title: 'Design',
      text: 'Banners, covers and visual identities with a bold, striking visual language — combining design, graphic experimentation, contrast and texture to build unique pieces tailored to each project.',
      labels: ['Poster · 01', 'Cover · 02', 'Banner · 03', 'Banner · 04'],
    },
    ia: {
      num: '04',
      kicker: 'Process',
      title: 'AI',
      text: 'I use Artificial Intelligence to support my creative process — for example, to generate characters, particles and effects that are later refined and integrated into the livery. Composition, editing and visual identity remain under my creative control.',
      labels: ['AI Livery · 01', 'AI Livery · 02', 'AI Livery · 03'],
    },
  },
}

export const content = { pt, en }
export const languages = [
  { code: 'pt', short: 'PT', name: 'Português (Brasil)' },
  { code: 'en', short: 'EN', name: 'English' },
]

// junta os textos do idioma com as imagens de cada seção
export function getSections(t) {
  return Object.keys(media).map((id) => ({
    id,
    ...t.sections[id],
    items: media[id].map((m, i) => ({ ...m, label: t.sections[id].labels[i] })),
  }))
}
