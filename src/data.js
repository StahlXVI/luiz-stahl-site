// Todo o conteúdo do site fica aqui. Para trocar texto ou imagem, mexa só neste arquivo.

export const links = {
  behance: 'https://www.behance.net/luizstahl',
  instagram: 'https://www.instagram.com/stahl_xvi',
}

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'livery', label: 'Livery' },
  { id: 'roupas', label: 'Roupas' },
  { id: 'design', label: 'Design' },
  { id: 'ia', label: 'IA' },
]

export const roles = ['Graphic Designer', 'Livery Maker', 'Texture for clothes']

export const about = {
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
}

// span = quantas colunas (de 12) a imagem ocupa no computador; aspect = formato da caixa
export const sections = [
  {
    id: 'livery',
    num: '01',
    kicker: 'Trabalhos',
    title: 'Livery',
    text: 'Criação de liveries para carros em ambientes 3D — do conceito visual à aplicação final no modelo.',
    callout: {
      title: 'O que é uma livery?',
      text: 'É o conjunto de cores, traços, texturas e símbolos que revestem a carroceria, transformando o veículo em uma obra de identidade. Mais do que uma pintura, é a assinatura estética de uma equipe, marca ou projeto — une arte e função, definindo a personalidade do carro.',
    },
    items: [
      { src: '/imagens/livery-1.jpg', label: 'Livery · 01', span: 'md:col-span-12', aspect: 'aspect-video' },
      { src: '/imagens/livery-2.jpg', label: 'Livery · 02', span: 'md:col-span-6', aspect: 'aspect-video' },
      { src: '/imagens/livery-3.jpg', label: 'Livery · 03', span: 'md:col-span-6', aspect: 'aspect-video' },
    ],
  },
  {
    id: 'roupas',
    num: '02',
    kicker: 'Trabalhos',
    title: 'Roupas',
    text: 'Atuo na criação de identidades visuais e estampas em ambientes 3D. Desenvolvo o conceito visual, a composição gráfica e a aplicação das artes diretamente nos modelos tridimensionais, criando designs prontos para projetos digitais e jogos.',
    items: [
      { src: '/imagens/roupas-1.jpg', label: 'Roupas · 01', span: 'md:col-span-6', aspect: 'aspect-video' },
      { src: '/imagens/roupas-2.jpg', label: 'Roupas · 02', span: 'md:col-span-6', aspect: 'aspect-video' },
    ],
  },
  {
    id: 'design',
    num: '03',
    kicker: 'Trabalhos',
    title: 'Design',
    text: 'Banners, capas e identidades visuais com uma linguagem forte e marcante — unindo design, experimentação gráfica, contrastes e texturas para construir artes únicas e alinhadas a cada projeto.',
    items: [
      { src: '/imagens/design-1.jpg', label: 'Poster · 01', span: 'md:col-span-6', aspect: 'aspect-[4/5]' },
      { src: '/imagens/design-2.jpg', label: 'Capa · 02', span: 'md:col-span-6', aspect: 'aspect-[4/5]' },
      { src: '/imagens/design-3.jpg', label: 'Banner · 03', span: 'md:col-span-12', aspect: 'aspect-[3/1]' },
      { src: '/imagens/design-4.jpg', label: 'Banner · 04', span: 'md:col-span-12', aspect: 'aspect-[3/1]' },
    ],
  },
  {
    id: 'ia',
    num: '04',
    kicker: 'Processo',
    title: 'IA',
    text: 'Uso Inteligência Artificial como apoio no processo criativo — por exemplo, para gerar personagens, partículas e efeitos que depois são tratados e integrados à livery. A composição, edição e identidade visual continuam sob meu controle criativo.',
    items: [
      { src: '/imagens/ia-1.jpg', label: 'Livery com IA · 01', span: 'md:col-span-8 md:row-span-2', aspect: 'aspect-video md:aspect-auto md:h-full' },
      { src: '/imagens/ia-2.jpg', label: 'Livery com IA · 02', span: 'md:col-span-4', aspect: 'aspect-[16/10]' },
      { src: '/imagens/ia-3.jpg', label: 'Livery com IA · 03', span: 'md:col-span-4', aspect: 'aspect-[16/10]' },
    ],
  },
]
