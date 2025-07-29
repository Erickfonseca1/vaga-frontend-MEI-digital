# 📋 Como Ver os Logs da Aplicação

## 🎯 **Onde os Logs Aparecem:**

### **1. Terminal do Expo (Recomendado)**
Os logs aparecem no terminal onde você executou `npm start` ou `npm run web`:

```bash
cd mobile
npm start
# ou
npm run web
```

**O que você verá:**
```
🚀 === DADOS DA CONTRATAÇÃO === 🚀
📋 Serviço: Nome do Serviço
👤 Nome completo: João Silva
📧 E-mail: joao@email.com
📞 Telefone: (11) 99999-9999
💰 Preço do serviço: R$ 150,00
📅 Data/Hora: 28/07/2024 15:30:45
🎯 === FIM DOS DADOS === 🚀

⚠️ CONTRATAÇÃO REALIZADA - VERIFIQUE OS LOGS ACIMA ⚠️
```

### **2. Console do Navegador (Web)**
Se estiver usando a versão web:

1. **Abra as Ferramentas do Desenvolvedor:**
   - Chrome/Edge: `F12` ou `Ctrl+Shift+I`
   - Firefox: `F12` ou `Ctrl+Shift+I`

2. **Vá para a aba "Console"**

3. **Você verá:**
   - Logs detalhados com emojis
   - Uma tabela organizada com os dados
   - Mensagem de confirmação

### **3. Expo DevTools (Mobile)**
Se estiver usando Expo Go no celular:

1. **Abra o Expo DevTools** no navegador
2. **Vá para a aba "Logs"**
3. **Os logs aparecerão em tempo real**

## 🔧 **Se os Logs Não Aparecerem:**

### **Problema 1: Logs não aparecem no terminal**
**Solução:**
```bash
# Pare o servidor (Ctrl+C)
# Limpe o cache e reinicie
npm run clear
# ou
npx expo start --clear
```

### **Problema 2: Logs não aparecem no web**
**Solução:**
1. Abra o console do navegador (F12)
2. Verifique se há erros
3. Recarregue a página (F5)

### **Problema 3: Logs não aparecem no mobile**
**Solução:**
1. Use o Expo DevTools
2. Ou conecte o dispositivo via USB e use `adb logcat`

## 📱 **Testando os Logs:**

### **Passo a Passo:**
1. **Inicie a aplicação:**
   ```bash
   cd mobile
   npm start
   ```

2. **Navegue até um serviço e clique em "Contratar"**

3. **Preencha o formulário:**
   - Nome: João Silva
   - E-mail: joao@email.com
   - Telefone: (11) 99999-9999

4. **Clique em "Confirmar Contratação"**

5. **Verifique o terminal** - os logs devem aparecer imediatamente

## 🎨 **Formato dos Logs:**

Os logs incluem:
- ✅ **Emojis** para fácil identificação
- 📋 **Dados organizados** por categoria
- 💰 **Preço formatado** em reais
- 📅 **Data e hora** da contratação
- ⚠️ **Mensagem de confirmação** destacada

## 🐛 **Debugging:**

Se ainda não conseguir ver os logs:

1. **Adicione logs de teste:**
   ```javascript
   console.log('TESTE - FUNÇÃO EXECUTADA');
   ```

2. **Verifique se a função está sendo chamada:**
   - Adicione um `console.log` no início da função `onSubmit`

3. **Teste em diferentes plataformas:**
   - Web: Console do navegador
   - Mobile: Expo DevTools
   - Terminal: Logs do Expo 