# Luiz Stahl — Portfólio

Site de portfólio do Luiz Stahl: Graphic Designer, Livery Maker e Texture for clothes.

Feito com **React + Vite + Tailwind CSS + Framer Motion**.

## Trocar textos e imagens

Todo o conteúdo fica em um arquivo só: [`src/data.js`](src/data.js).

- **Texto:** edite as frases direto no `data.js`.
- **Imagem nova:** coloque o arquivo em `public/imagens/` e adicione uma linha no `items` da seção, por exemplo:

  ```js
  { src: '/imagens/livery-4.jpg', label: 'Livery · 04', span: 'md:col-span-6', aspect: 'aspect-video' },
  ```

  `span` é quantas colunas (de 12) a imagem ocupa no computador. No celular, cada imagem ocupa a largura toda.

- **Links do Instagram e Behance:** ficam no topo do `data.js`, em `links`.

## Rodar no computador

Precisa do [Node.js](https://nodejs.org) instalado.

```bash
npm install
npm run dev
```

Abra o endereço que aparecer (geralmente http://localhost:5173).

## Colocar no ar (Vercel)

1. Entre em [vercel.com](https://vercel.com) e faça login com o GitHub.
2. Clique em **Add New → Project**.
3. Escolha este repositório e clique em **Import**.
4. A Vercel reconhece que é Vite sozinha. Clique em **Deploy**.
5. Pronto: em ~1 minuto aparece o link do site (`algo.vercel.app`).

Depois disso, toda mudança enviada para o GitHub atualiza o site sozinha.

**Domínio próprio** (ex.: `luizstahl.com`): na Vercel, abra o projeto → **Settings → Domains**.
