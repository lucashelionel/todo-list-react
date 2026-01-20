# 📝 Todo List React

Uma aplicação moderna de gerenciamento de tarefas construída com React, TypeScript e Vite, oferecendo uma interface intuitiva e responsiva para organizar suas atividades diárias.

## 🎯 Visão Geral

Esta é uma aplicação web de lista de tarefas (TODO List) desenvolvida com as mais recentes tecnologias React. A aplicação permite criar, visualizar, editar e marcar tarefas como concluídas, com persistência de dados no navegador, contendo também simulação de estado de carregamento de componentes.

---

## 🚀 Como Rodar a Aplicação

### Pré-requisitos
- Node.js (versão 18+)
- npm, yarn, pnpm ou outro gerenciador de pacotes

### Instalação e Execução

**1. Instalar dependências:**
```bash
pnpm install
# ou
npm install
# ou
yarn install
```

**2. Iniciar o servidor de desenvolvimento:**
```bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
```

A aplicação será aberta automaticamente em `http://localhost:5173` (padrão Vite).

**3. Build para produção:**
```bash
pnpm build
# ou
npm run build
# ou
yarn build
```

**4. Visualizar build de produção localmente:**
```bash
pnpm preview
# ou
npm run preview
# ou
yarn preview
```

**5. Verificar linting:**
```bash
pnpm lint
# ou
npm run lint
# ou
yarn lint
```

---

## 📁 Estrutura de Pastas

```
todo-list-react/
├── src/
│   ├── components/               # Componentes reutilizáveis (UI primitivos)
│   │   ├── badge.tsx            # Componente de badge/etiqueta
│   │   ├── button-icon.tsx       # Botão com ícone
│   │   ├── button.tsx            # Botão genérico
│   │   ├── card.tsx              # Componente de card/container estilizado
│   │   ├── container.tsx         # Container principal
│   │   ├── icon.tsx              # Wrapper de ícones
│   │   ├── input-checkbox.tsx    # Checkbox customizado
│   │   ├── input-text.tsx        # Input de texto
│   │   ├── skeleton.tsx          # Skeleton para loading states
│   │   └── text.tsx              # Componente de texto
│   │
│   ├── core-components/          # Componentes principais da aplicação
│   │   ├── footer.tsx            # Rodapé da aplicação
│   │   ├── header.tsx            # Cabeçalho da aplicação
│   │   ├── main-content.tsx       # Container principal de conteúdo
│   │   ├── task-item.tsx         # Componente individual de tarefa
│   │   ├── tasks-list.tsx        # Lista de tarefas
│   │   └── tasks-summary.tsx     # Resumo/estatísticas das tarefas
│   │
│   ├── pages/                    # Páginas/Views da aplicação
│   │   ├── layout-main.tsx       # Layout principal com rotas
│   │   ├── page-components.tsx   # Página de componentes (storybook-like)
│   │   └── page-home.tsx         # Página inicial com lista de tarefas
│   │
│   ├── hooks/                    # Custom React Hooks
│   │   ├── use-task.ts           # Hook para gerenciar uma tarefa individual
│   │   └── use-tasks.ts          # Hook para gerenciar lista de tarefas
│   │
│   ├── models/                   # Tipos e modelos de dados
│   │   └── task.ts               # Interface e tipos para Task
│   │
│   ├── helpers/                  # Funções utilitárias
│   │   └── utils.ts              # Funções auxiliares gerais
│   │
│   ├── assets/                   # Recursos estáticos
│   │   ├── icons/                # Ícones da aplicação
│   │   └── images/               # Imagens
│   │
│   ├── App.tsx                   # Componente raiz da aplicação
│   ├── main.tsx                  # Arquivo de entrada
│   ├── index.css                 # Estilos globais
│   └── vite-env.d.ts             # Tipos do Vite
│
├── public/                       # Arquivos estáticos públicos
│
├── eslint.config.js              # Configuração ESLint
├── vite.config.ts                # Configuração Vite
├── tsconfig.json                 # Configuração TypeScript
├── tsconfig.app.json             # Configuração TypeScript para app
├── tsconfig.node.json            # Configuração TypeScript para build
├── index.html                    # HTML principal
├── package.json                  # Dependências e scripts
├── pnpm-lock.yaml                # Lock file pnpm
└── README.md                     # Este arquivo
```

---

## 📋 Descrição das Pastas Principais

### `src/components/`
Contém componentes reutilizáveis e agnósticos de negócio que servem como blocos de construção para a interface. Esses são componentes de UI primitivos que não possuem lógica específica de tarefas.

**Exemplos:**
- `button.tsx` - Botão genérico com variações
- `input-text.tsx` - Input de texto customizado
- `card.tsx` - Container estilizado

### `src/core-components/`
Componentes específicos do domínio da aplicação que utilizam os componentes primitivos para compor a interface de gerenciamento de tarefas.

**Exemplos:**
- `task-item.tsx` - Componente de uma tarefa individual
- `tasks-list.tsx` - Lista completa de tarefas
- `header.tsx` e `footer.tsx` - Componentes estruturais

### `src/pages/`
Componentes de nível superior que representam rotas completas da aplicação. Utilizam core-components e components para montar a página.

**Rotas disponíveis:**
- `/` - Página home com lista de tarefas
- `/componentes` - Página de showcase de componentes

### `src/hooks/`
Custom React Hooks para gerenciamento de estado e lógica de negócio reutilizável.

- `use-tasks.ts` - Gerencia operações CRUD de tarefas
- `use-task.ts` - Gerencia estado de tarefa individual

### `src/models/`
Define tipos TypeScript e interfaces que representam estruturas de dados da aplicação.

- `task.ts` - Define a interface `Task` e enum `TaskState`

### `src/helpers/`
Funções utilitárias e helpers que são usadas em diversos lugares da aplicação.

### `src/assets/`
Recursos estáticos como ícones SVG (convertidos em componentes via SVGR) e imagens.

---

## 🛠️ Tecnologias Utilizadas

### Tecnologias Principais

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **React** | 19.2.0 | Biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis |
| **React DOM** | 19.2.0 | Pacote que fornece métodos específicos do DOM para React |
| **React Router** | 7.12.0 | Biblioteca de roteamento para navegação entre páginas |
| **TypeScript** | ~5.9.3 | Superset de JavaScript com tipagem estática |
| **Vite** | 7.2.4 | Build tool moderno e rápido como substituto do Webpack |
| **Tailwind CSS** | 4.1.18 | Framework CSS utilitário para estilização rápida e responsiva |

### Ferramentas de Desenvolvimento

| Ferramenta | Versão | Descrição |
|-----------|--------|-----------|
| **@vitejs/plugin-react-swc** | 4.2.2 | Plugin Vite usando SWC para Fast Refresh mais rápido |
| **@tailwindcss/vite** | 4.1.18 | Plugin Vite para integração de Tailwind CSS |
| **vite-plugin-svgr** | 4.5.0 | Plugin para importar SVGs como componentes React |
| **ESLint** | 9.39.1 | Ferramenta para identificar e corrigir problemas no código |
| **typescript-eslint** | 8.46.4 | Plugin ESLint para suporte TypeScript |
| **class-variance-authority** | 0.7.1 | Biblioteca para gerenciar variações de classes CSS em componentes |

### Dependências de Desenvolvimento

| Dependência | Versão | Descrição |
|-----------|--------|-----------|
| **@types/react** | 19.2.5 | Tipos TypeScript para React |
| **@types/react-dom** | 19.2.3 | Tipos TypeScript para React DOM |
| **@types/node** | 24.10.1 | Tipos TypeScript para Node.js |
| **@eslint/js** | 9.39.1 | Configurações ESLint recomendadas |
| **eslint-plugin-react-hooks** | 7.0.1 | Plugin ESLint para React Hooks |
| **eslint-plugin-react-refresh** | 0.4.24 | Plugin ESLint para React Refresh |
| **globals** | 16.5.0 | Variáveis globais comuns |

### Dependências de Produção

| Dependência | Versão | Descrição |
|-----------|--------|-----------|
| **use-local-storage** | 3.0.0 | Hook customizado para gerenciar estado persistente no localStorage |

---

## 📦 Detalhamento das Dependências

### Frontend Core
- **react** e **react-dom**: Framework React principal com versão 19, oferecendo o melhor em performance e desenvolvimento
- **react-router**: Roteamento client-side com suporte a lazy loading e navegação dinamica

### Estilização
- **tailwindcss** e **@tailwindcss/vite**: Estilização utilitária com integração perfeita ao Vite
- **class-variance-authority (CVA)**: Gerenciador de variações de classes para componentes dinâmicos e reutilizáveis

### Construção e Otimização
- **vite**: Build tool ultra-rápido com suporte HMR (Hot Module Replacement)
- **@vitejs/plugin-react-swc**: Compilação rápida usando SWC em vez de Babel
- **@tailwindcss/vite**: Plugin Vite para Tailwind CSS
- **vite-plugin-svgr**: Converte arquivos SVG em componentes React importáveis

### Persistência
- **use-local-storage**: Hook que encapsula a API do localStorage para gerenciar estado persistente de tarefas

### Type Safety
- **typescript**: TypeScript ~5.9.3 para tipagem estática completa

### Qualidade de Código
- **eslint**: Análise estática do código
- **typescript-eslint**: Integração completa entre ESLint e TypeScript
- **eslint-plugin-react-hooks**: Validação de regras de React Hooks
- **eslint-plugin-react-refresh**: Detecção de problemas com React Refresh

---

## ✨ Características Principais

✅ **Criar tarefas** - Adicione novas tarefas com título  
✅ **Marcar como concluído** - Toggle de status com checkbox  
✅ **Editar tarefas** - Modifique o conteúdo de tarefas existentes  
✅ **Deletar tarefas** - Remova tarefas da lista  
✅ **Persistência** - Dados salvos no localStorage do navegador  
✅ **Interface responsiva** - Design adaptável para diferentes tamanhos de tela  
✅ **Componentes reutilizáveis** - Estrutura escalável e mantível  
✅ **Tipagem completa** - TypeScript em toda a aplicação  
✅ **Roteamento** - React Router para navegação entre páginas  
✅ **Design System** - Página de componentes para visualização do design system  

---

## 📋 Modelo de Dados

### Task
```typescript
interface Task {
  id: string;           // Identificador único da tarefa
  title: string;        // Título/conteúdo da tarefa
  concluded?: boolean;  // Flag indicando se a tarefa foi concluída
  state?: TaskState;    // Estado atual da tarefa
}

enum TaskState {
  Creating = 'creating',   // Tarefa em processo de criação
  Created = 'created',     // Tarefa já criada
}

const TASKS_KEY = "tasks";  // Chave para armazenamento no localStorage
```

---

## 🎨 Arquitetura de Componentes

### Hierarquia de Componentes

```
App
├── LayoutMain
│   ├── Header
│   ├── MainContent
│   │   └── PageHome | PageComponents
│   │       └── TasksList
│   │           └── TaskItem (múltiplos)
│   └── Footer
```

### Padrão de Componentes

**Componentes Primitivos** (`components/`):
- Agnósticos de negócio
- Reutilizáveis em qualquer contexto
- Aceitam props para customização
- Usam CVA para variações

**Componentes Core** (`core-components/`):
- Específicos do domínio
- Compõem componentes primitivos
- Contêm lógica de apresentação

**Pages** (`pages/`):
- Rotas completas
- Compõem core-components
- Gerenciam estado global da página

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento Vite
                      # Abre automaticamente em http://localhost:5173

# Build
pnpm build            # Compila TypeScript e faz build Vite
                      # Gera otimizações para produção em dist/

# Verificação de Código
pnpm lint             # Executa ESLint em toda a base de código
                      # Verifica compliance com regras de qualidade

# Preview
pnpm preview          # Visualiza o build de produção localmente
                      # Útil para testar antes de fazer deploy
```

---

## 💾 Persistência de Dados

A aplicação utiliza a API `localStorage` do navegador para persistir as tarefas:

- **Chave de armazenamento**: `tasks`
- **Formato**: Array JSON de objetos Task
- **Duração**: Permanente até limpeza manual do cache do navegador
- **Sincronização**: Automática através do hook `use-local-storage`

As tarefas são automaticamente recuperadas quando a página é recarregada.

---

## 📚 Sistema de Hooks

### `use-tasks.ts`
Gerencia a coleção completa de tarefas com operações CRUD:
- Criar nova tarefa
- Atualizar tarefa existente
- Deletar tarefa
- Recuperar todas as tarefas
- Sincronizar com localStorage

### `use-task.ts`
Gerencia estado de uma tarefa individual:
- Atualizar propriedades
- Validar dados
- Manter estado sincronizado

---

## 🌐 Roteamento

Definido em [src/App.tsx](src/App.tsx) usando React Router:

```
BrowserRouter
└── LayoutMain (layout principal)
    ├── / (index) → PageHome
    └── /componentes → PageComponents
```

**Rotas:**
- `/` - Página inicial com gerenciador de tarefas
- `/componentes` - Showcase do design system

---

## 🏗️ Arquitetura em Camadas

```
┌─────────────────────────────────┐
│    Pages (Rotas/Views)          │
│    (page-home.tsx, etc)         │
└────────────────┬────────────────┘
                 │
┌────────────────▼────────────────┐
│  Core Components (Features)     │
│  (task-item.tsx, tasks-list)    │
└────────────────┬────────────────┘
                 │
┌────────────────▼────────────────┐
│  Components (Primitivos)        │
│  (button.tsx, input-text.tsx)   │
└────────────────┬────────────────┘
                 │
┌────────────────▼────────────────┐
│  Data Layer                     │
│  - Hooks (use-tasks.ts)         │
│  - Models (task.ts)             │
│  - Utils (utils.ts)             │
└─────────────────────────────────┘
```

---

## 🚀 Build e Deploy

### Desenvolvimento
```bash
pnpm dev
```

### Produção
```bash
pnpm build
```

O build gera uma pasta `dist/` com:
- HTML minificado
- JavaScript bundled e tree-shaked
- CSS compilado e minificado
- Assets otimizados

### Deploy
1. Execute `pnpm build`
2. Faça upload dos arquivos da pasta `dist/` para seu servidor web
3. Configure rewrite de URLs (importante para React Router)

**Exemplo nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 🔍 Checklist de Desenvolvimento

- [x] Setup Vite com React e TypeScript
- [x] Configuração de Tailwind CSS
- [x] Integração de SVG como componentes
- [x] Sistema de componentes reutilizáveis
- [x] Roteamento com React Router
- [x] Persistência com localStorage
- [x] ESLint e TypeScript strict mode
- [x] Estrutura de pastas escalável

---

## 🤝 Contribuindo

Para adicionar novas funcionalidades:

1. Crie componentes primitivos em `components/`
2. Componha-os em `core-components/`
3. Use em `pages/` conforme necessário
4. Mantenha tipagem TypeScript completa
5. Execute `pnpm lint` antes de commitar

---

*Última atualização: Janeiro 2026*
