# Next Level Week Return :rocket:

Projeto desenvolvido durante a trilha **[Impulse](https://efficient-sloth-d85.notion.site/Impulse-58f2daadb8e1433894420cbc57571087)**.

## Projeto - Feedback Widget

Iniciando server:

- Instalar dependências com `npm install`
- Web/Server: `npm run dev`

## Tools

**Geral**
- Visual Studio Code
- Google Chrome
- Typescript

**Web**
- Vite
- React
- Tailwind CSS
- Headless UI (accessibility)
- Axios

**Server**
- Node.js
- Express
- Prisma
- SQLite
- Jest
- Mailtrap

## Deploy

**Web**

O projeto pode ser acessado pelo link [da Vercel](https://nlw-return-impulse-murex.vercel.app/)

**API**

API disponível pelo link [do Railway](https://nlw-return-impulse-production-ed3e.up.railway.app/)

## Endpoint

- POST /feedbacks
```
BODY:
{
  "type": "string",
  "comment": "string",
  "screenshot": "string - base64 image" (opcional)
}
```
