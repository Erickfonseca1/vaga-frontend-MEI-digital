# 🚀 Instruções para Executar a Aplicação Mobile

## ✅ **Problemas Corrigidos:**

1. **Estrutura de pastas duplicada** - Removida pasta `mobile/mobile/`
2. **Versões incompatíveis do React Navigation** - Atualizadas para versões estáveis
3. **Configuração do TypeScript** - Adicionado suporte a JSX e ES modules
4. **Configuração do Metro bundler** - Resolvidos problemas de resolução de módulos
5. **URL da API** - Configurada para emulador Android (`10.0.2.2:3001`)

## 📱 **Como Executar:**

### **Opção 1: Emulador Android (Recomendado)**

1. **Iniciar o emulador Android:**
   - Abra o Android Studio
   - Vá em `Tools` → `AVD Manager`
   - Inicie um emulador Android

2. **Executar a aplicação:**
   ```bash
   cd mobile
   npm run android
   ```

### **Opção 2: Expo Go no Celular**

1. **Instalar Expo Go:**
   - Android: Google Play Store
   - iOS: App Store

2. **Executar a aplicação:**
   ```bash
   cd mobile
   npm start
   ```

3. **Escanear o QR code** com o app Expo Go

### **Opção 3: Navegador Web**

```bash
cd mobile
npm run web
```

## 🔧 **Configurações Importantes:**

### **URL da API:**
- **Emulador Android**: `http://10.0.2.2:3001` ✅ (já configurado)
- **Dispositivo físico**: Use o IP da sua máquina na rede local
- **Web**: `http://localhost:3001`

### **Para dispositivos físicos:**
Edite o arquivo `src/services/api.ts` e altere a URL:
```typescript
const API_BASE_URL = 'http://SEU_IP_LOCAL:3001';
```

## 🐛 **Solução de Problemas:**

### **Erro de bundling:**
```bash
npm run clear
```

### **Problemas de dependências:**
```bash
npm run reset
```

### **Erro de conexão com API:**
1. Verifique se o backend está rodando na porta 3001
2. Confirme a URL da API em `src/services/api.ts`
3. Para dispositivos físicos, use o IP da máquina em vez de localhost

### **Erro de cache:**
```bash
npx expo start --clear
```

## 📋 **Checklist de Verificação:**

- [ ] Backend rodando na porta 3001
- [ ] Emulador Android iniciado (se usando emulador)
- [ ] Expo Go instalado (se usando dispositivo físico)
- [ ] URL da API configurada corretamente
- [ ] Dependências instaladas (`npm install`)

## 🎯 **Funcionalidades Testadas:**

- ✅ Listagem de serviços
- ✅ Navegação entre telas
- ✅ Formulário de contratação
- ✅ Validação de campos
- ✅ Formatação de telefone
- ✅ Impressão no console
- ✅ Tratamento de erros

## 📞 **Suporte:**

Se ainda houver problemas, verifique:
1. Logs no terminal
2. Console do navegador (se usando web)
3. Logs do Expo Go (se usando dispositivo) 