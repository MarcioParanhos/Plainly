# Plainly

Plainly é uma aplicação web para criação e gerenciamento de currículos (resumes) desenvolvida com Next.js, Tailwind CSS e um editor rico baseado em TipTap. Este README fornece instruções rápidas para rodar, buildar e contribuir com o projeto.

## Visão geral

- Tecnologias principais: Next.js 14, React 18, TypeScript, Tailwind CSS.
- Editor de texto rico: TipTap (@tiptap/react).
- Componentes de UI acessíveis: Radix UI, ícones com lucide-react.
- Theme (dark/light) com `next-themes`.

O projeto contém um painel (dashboard) para criação/edição de currículos, com componentes reutilizáveis e uma arquitetura baseada em `src/app` (routes / layouts do Next.js 14).

## Requisitos

- Node.js (recomendado: 18+)
- npm ou pnpm/yarn

Observação: este repositório não inclui um `.env` por padrão. Se sua implantação necessitar de chaves (por exemplo, APIs de geração por IA), crie um arquivo `.env.local` na raiz e configure as variáveis necessárias.

## Instalação (Windows - PowerShell)

Abra um terminal na raiz do projeto e execute:

```powershell
npm install
<!-- prettier-ignore -->
# 🚀 Plainly

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23529EC2?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

Uma aplicação para criação e gerenciamento de currículos (resumes) com editor rico (TipTap), temas claros/escuros e componentes reutilizáveis.

---

## ✨ Destaques

- UI moderna e acessível (Radix UI + Tailwind).
- Editor WYSIWYG com TipTap para edição de seções do currículo.
- Suporte a temas via `next-themes` (modo claro/escuro).
- Importação de SVGs como componentes React (SVGR configurado).

## 🔧 Requisitos

- Node.js 18+ (recomendado)
- npm, yarn ou pnpm

> Observação: se usar integrações externas (APIs de IA, etc.), crie um `.env.local` na raiz e adicione as variáveis necessárias.

## 🏁 Começando (Windows - PowerShell)

Abra um terminal na raiz do projeto:

```powershell
npm install
npm run dev
```

Depois, acesse http://localhost:3000

## 📦 Scripts úteis

- `npm run dev` — iniciar servidor de desenvolvimento.
- `npm run build` — gerar build para produção.
- `npm run start` — iniciar servidor em modo produção (após `build`).
- `npm run lint` — rodar ESLint.

## 📁 Estrutura principal

- `src/app` — rotas e layouts do Next.js
- `src/components` — componentes por página e primitives de UI
- `src/components/shared` — providers (ex.: `theme-provider.tsx`)
- `src/components/ui` — componentes básicos (button, input, editor, dialog)
- `src/lib/utils.ts` — helpers (ex.: `cn` para classNames)
- `src/styles` — estilos globais (Tailwind `globals.css`)

## 🛠️ Notas técnicas

- `next.config.mjs` contém configuração para carregar SVGs via `@svgr/webpack`.
- Editor baseado em TipTap com extensões como `@tiptap/extension-text-align` e `@tiptap/extension-underline`.
- `tailwind.config.ts` define tokens de cor e fontes customizadas.

## ☁️ Deploy

Recomendado: Vercel (integração nativa com Next.js).

1. Conecte o repositório ao Vercel.
2. Configure variáveis de ambiente (se aplicável).
3. Deploy automático a cada push na branch `main`.

## 🤝 Como contribuir

1. Fork e crie uma branch `feature/*` ou `fix/*`.
2. Abra um PR com descrição clara das mudanças.
3. Siga as convenções de código (TypeScript, Tailwind utilities).

## ✅ Sugestões de melhorias

- Adicionar testes (Jest + React Testing Library).
- GitHub Actions para CI (lint, typecheck, testes).
- Templates de Issues e PR.
- Página de onboarding para novos usuários.

## 🔎 Troubleshooting

- SVGs não aparecem como componente? Verifique `next.config.mjs` e se `@svgr/webpack` está instalado.
- Problemas com Tailwind? Confirme `content` no `tailwind.config.ts` e reinicie o servidor dev.

## 📬 Contato

Abra uma Issue ou PR no repositório para discutir melhorias ou relatar bugs.

---

_README atualizado: adicionado visual (badges, emojis) e simplificado para leitura rápida._
