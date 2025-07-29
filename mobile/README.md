# Aplicação Mobile - MEI Digital

Aplicação mobile desenvolvida com React Native e Expo para contratação de serviços.

## 🚀 Tecnologias Utilizadas

- **Expo** - Framework para desenvolvimento React Native
- **React Native** - Framework para desenvolvimento mobile
- **React Navigation** - Navegação entre telas
- **React Hook Form** - Gerenciamento de formulários
- **Yup** - Validação de formulários
- **TypeScript** - Tipagem estática

## 📱 Funcionalidades

### Tela Inicial (HomeScreen)
- Listagem dos serviços disponíveis para contratação
- Pull-to-refresh para atualizar a lista
- Loading state durante carregamento
- Tratamento de erros de conexão
- Cards com informações do serviço (nome, preço, descrição)

### Tela de Contratação (ContractScreen)
- Formulário com validação completa:
  - **Nome completo** (obrigatório, mínimo 3 caracteres)
  - **E-mail** (obrigatório, formato válido)
  - **Telefone** (obrigatório, formato brasileiro)
- Formatação automática do telefone
- Validação em tempo real
- Impressão no console dos dados do formulário + nome do serviço
- Navegação de volta para a tela inicial após sucesso

## 🎨 Identidade Visual

A aplicação utiliza as cores da identidade visual:

- **Primary (Azure)**: `#007bff` - Botões principais, links
- **Success (Pigment Green)**: `#28a745` - Botões de sucesso
- **Neutral (Seasalt)**: `#f8f9fa` - Fundos neutros
- **Warning (Amber)**: `#ffc107` - Alertas
- **Danger (Poppy)**: `#db3a34` - Erros, validações

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app no dispositivo móvel ou emulador

### Passos para execução

1. **Instalar dependências:**
   ```bash
   cd mobile
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

3. **Executar no dispositivo:**
   - Abra o Expo Go no seu dispositivo móvel
   - Escaneie o QR code que aparece no terminal
   - Ou pressione `a` para Android ou `i` para iOS (se tiver emulador)

### Configuração da API

A aplicação consome dados do backend web. Certifique-se de que:

1. O servidor backend está rodando na porta 3001
2. A URL da API está configurada corretamente em `src/services/api.ts`
3. Para desenvolvimento local, use `http://localhost:3001`
4. Para dispositivos físicos, use o IP da sua máquina na rede local

## 📁 Estrutura do Projeto

```
mobile/
├── src/
│   ├── components/
│   │   └── ServiceCard.tsx          # Card de serviço
│   ├── screens/
│   │   ├── HomeScreen.tsx           # Tela inicial
│   │   └── ContractScreen.tsx       # Tela de contratação
│   ├── services/
│   │   └── api.ts                   # Serviços de API
│   ├── styles/
│   │   └── colors.ts                # Cores da identidade visual
│   └── types/
│       ├── index.ts                 # Tipos principais
│       └── navigation.ts            # Tipos de navegação
├── App.tsx                          # Componente principal
├── package.json                     # Dependências
└── README.md                        # Documentação
```

## 🔧 Desenvolvimento

### Adicionando novos serviços
Os serviços são carregados automaticamente da API. Para adicionar novos serviços, use a interface web do backend.

### Modificando validações
As validações do formulário estão em `src/screens/ContractScreen.tsx` usando Yup. Modifique o schema conforme necessário.

### Alterando cores
As cores estão centralizadas em `src/styles/colors.ts`. Modifique este arquivo para alterar a identidade visual.

## 📱 Testes

### Funcionalidades testadas:
- ✅ Listagem de serviços
- ✅ Navegação entre telas
- ✅ Validação de formulário
- ✅ Formatação de telefone
- ✅ Impressão no console
- ✅ Tratamento de erros
- ✅ Loading states
- ✅ Pull-to-refresh

### Dispositivos testados:
- Android (Expo Go)
- iOS (Expo Go)
- Emuladores Android/iOS

## 🐛 Solução de Problemas

### Erro de conexão com API
- Verifique se o backend está rodando
- Confirme a URL da API em `src/services/api.ts`
- Para dispositivos físicos, use o IP da máquina em vez de localhost

### Erro de build
- Limpe o cache: `expo start -c`
- Reinstale dependências: `rm -rf node_modules && npm install`

### Problemas de navegação
- Verifique se todas as dependências do React Navigation estão instaladas
- Confirme se os tipos de navegação estão corretos 