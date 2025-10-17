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
```

## Scripts úteis

Extraído de `package.json`:

- `npm run dev` — inicia o servidor de desenvolvimento (Next.js).
- `npm run build` — constrói a aplicação para produção.
- `npm run start` — inicia a aplicação em modo produção (após `build`).
- `npm run lint` — roda o ESLint.

Exemplo de uso local:

```powershell
npm run dev
# Depois abra http://localhost:3000
```

## Estrutura principal do projeto

Pontos relevantes encontrados no repositório:

- `/src/app` — entradas e layouts da aplicação (`layout.tsx`, `page.tsx`).
- `/src/components` — componentes da UI, páginas e componentes do dashboard (ex.: `dashboard/nav-items.tsx`, `resume/*`).
- `/src/components/shared` — provedores e utilitários compartilhados (`theme-provider.tsx`).
- `/src/components/ui` — primitives e componentes de interface (botões, inputs, editor, dialogs, etc.).
- `/src/lib/utils.ts` — utilitários (ex.: helper `cn` para classNames com `tailwind-merge`).
- `/src/styles` — estilos globais (`globals.css`).
- `next.config.mjs` — configuração customizada do webpack para suportar SVG via `@svgr/webpack`.
- `tailwind.config.ts` — configuração do Tailwind (tema, cores e plugins).

Arquivos importantes para desenvolvimento: `src/app/layout.tsx` (setup de fontes e `ThemeProvider`) e `src/components/ui/editor` (integração do TipTap).

## Notas de implementação

- O projeto usa `next-themes` para gerenciamento de tema (dark/light).
- Foi configurado um loader SVGR em `next.config.mjs` — SVGs podem ser importados como componentes React.
- O editor utiliza TipTap com extensões (ex.: alinhamento, underline, starter-kit).

## Deploy

Recomendado: Vercel (integrado com Next.js). Passos gerais:

1. Conectar o repositório no Vercel.
2. Definir variáveis de ambiente (se houver) em `Environment Variables` no painel do Vercel.
3. Deploy automático a cada push na branch `main` (ou branch configurada).

## Como contribuir

1. Fork o repositório e crie uma branch feature/bugfix.
2. Abra um PR descrevendo a mudança.
3. Mantenha o código com TypeScript e estilos consistentes (Tailwind + classes utilitárias).

Sugestões de melhorias (próximos passos):

- Adicionar testes unitários/integração (Jest + React Testing Library).
- Configurar CI (GitHub Actions) para rodar lint, typecheck e testes.
- Melhorar acessibilidade (a11y) e cobertura de contrastes de cores.
- Adicionar página de onboarding ou tutoriais para criação de currículos.

## Troubleshooting

- Problema: SVGs não carregam como componente — verifique `next.config.mjs` e instale `@svgr/webpack`.
- Problema: Erros de CSS/ Tailwind — rode `npm install` e reinicie o servidor dev; verifique a propriedade `content` em `tailwind.config.ts`.

## Contato

Se você tem dúvidas, pode abrir uma Issue no repositório ou me chamar diretamente nos comentários do PR.

---

README gerado automaticamente com base na análise dos arquivos do projeto (package.json, next.config.mjs, tailwind.config.ts e entradas em `src/app`).
