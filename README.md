# Sistema de Serviços - MEI Digital

Este projeto consiste em uma aplicação completa para gerenciamento de serviços, composta por uma versão web (Next.js) e uma versão mobile (React Native/Expo).

## Tecnologias Utilizadas

### Web (Next.js)
- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Gerenciamento de Estado**: React Hooks
- **Validação**: Validação customizada com useState
- **Navegação**: Next.js Navigation

### Mobile (React Native/Expo)
- **Framework**: React Native com Expo
- **Linguagem**: TypeScript
- **Estilização**: NativeWind (Tailwind CSS para React Native)
- **Navegação**: React Navigation Stack
- **Validação**: Yup + React Hook Form
- **Gerenciamento de Estado**: React Hooks

## Funcionalidades

### Web
- ✅ **Listagem de Serviços**: Visualização de todos os serviços disponíveis
- ✅ **Cadastro de Serviços**: Formulário para criar novos serviços
- ✅ **Listagem de Contratos**: Visualização de contratos realizados
- ✅ **Design Responsivo**: Adaptação para diferentes tamanhos de tela

### Mobile
- ✅ **Listagem de Serviços**: Cards com informações dos serviços
- ✅ **Contratação de Serviços**: Formulário para contratar serviços
- ✅ **Modal de Confirmação**: Exibição dos dados da contratação
- ✅ **Navegação Intuitiva**: Stack navigation com botões voltar

## Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI (para mobile)

### Backend (JSON Server)
```bash
# Instalar json-server globalmente (se necessário)
npm install -g json-server

# Executar o servidor na porta 3001
json-server --watch db.json --port 3001
```

### Web (Next.js)
```bash
# Navegar para a pasta web
cd web

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Acessar: http://localhost:3000
```

### Mobile (Expo)
```bash
# Navegar para a pasta mobile
cd mobile

# Instalar dependências
npm install

# Executar com Expo
npx expo start
```

## Configurações

### API
- **URL Base**: `http://localhost:3001`
- **Endpoints**:
  - `GET /services` - Listar serviços
  - `POST /services` - Criar serviço
  - `GET /contracts` - Listar contratos
  - `POST /contracts` - Criar contrato

### Banco de Dados
O projeto utiliza JSON Server com um arquivo `db.json` que simula um banco de dados real.

## Design System

Ambas as aplicações seguem um design system consistente:
- **Cores**: Paleta baseada em azul (#007bff)
- **Tipografia**: Sistema de fontes responsivo
- **Componentes**: Header, Cards, badges
