# Guia de Cores - Identidade Visual

Este documento descreve como usar as cores da identidade visual no projeto.

## Cores Principais

### Paleta de Cores

| Cor | Nome | Hex | Uso |
|-----|------|-----|-----|
| **Azure** | `primary` | `#007bff` | Cor primária, botões principais, links |
| **Pigment Green** | `success` | `#28a745` | Ações de sucesso, confirmações |
| **Seasalt** | `neutral` | `#f8f9fa` | Cor neutra, fundos, textos secundários |
| **Amber** | `warning` | `#ffc107` | Alertas, avisos |
| **Poppy** | `danger` | `#db3a34` | Erros, ações de deletar |

## Como Usar

### 1. Classes Tailwind CSS

```jsx
// Cores principais
<div className="bg-primary text-white">Botão Primário</div>
<div className="bg-success text-white">Sucesso</div>
<div className="bg-neutral text-gray-800">Neutro</div>
<div className="bg-warning text-black">Alerta</div>
<div className="bg-danger text-white">Erro</div>

// Variantes de intensidade
<div className="bg-primary-100 text-primary-900">Variante clara</div>
<div className="bg-primary-900 text-primary-100">Variante escura</div>

// Textos
<p className="text-primary">Texto em azul</p>
<p className="text-success">Texto em verde</p>
<p className="text-warning">Texto em amarelo</p>
<p className="text-danger">Texto em vermelho</p>

// Bordas
<div className="border border-primary">Borda azul</div>
<div className="border-2 border-success">Borda verde</div>
```

### 2. Nomes Originais (Aliases)

```jsx
// Usando os nomes originais das cores
<div className="bg-azure text-white">Azure</div>
<div className="bg-pigment-green text-white">Pigment Green</div>
<div className="bg-seasalt text-gray-800">Seasalt</div>
<div className="bg-amber text-black">Amber</div>
<div className="bg-poppy text-white">Poppy</div>
```

### 3. Gradientes

```jsx
// Gradientes personalizados
<div className="bg-gradient-brand">Gradiente da marca</div>
<div className="bg-gradient-primary">Gradiente primário</div>
<div className="bg-gradient-warning">Gradiente de alerta</div>
<div className="bg-gradient-radial">Gradiente radial</div>
```

### 4. Variáveis CSS

```css
/* Usando variáveis CSS diretamente */
.custom-button {
  background-color: var(--color-primary);
  color: white;
}

.custom-success {
  background-color: var(--color-success);
  color: white;
}
```

## Casos de Uso Recomendados

### **Primary (Azure)**
- Botões de ação principal
- Links de navegação
- Elementos de destaque
- Headers e títulos importantes

### **Success (Pigment Green)**
- Mensagens de sucesso
- Botões de confirmação
- Status de "concluído"
- Indicadores positivos

### **Neutral (Seasalt)**
- Fundos de seções
- Textos secundários
- Bordas sutis
- Estados inativos

### **Warning (Amber)**
- Alertas e avisos
- Estados de atenção
- Validações pendentes
- Notificações importantes

### **Danger (Poppy)**
- Mensagens de erro
- Botões de deletar
- Estados críticos
- Validações negativas

## Exemplos Práticos

### Botões
```jsx
// Botão primário
<button className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded">
  Salvar
</button>

// Botão de sucesso
<button className="bg-success hover:bg-success-600 text-white px-4 py-2 rounded">
  Confirmar
</button>

// Botão de perigo
<button className="bg-danger hover:bg-danger-600 text-white px-4 py-2 rounded">
  Excluir
</button>
```

### Cards
```jsx
// Card com borda primária
<div className="border border-primary bg-white p-4 rounded-lg">
  <h3 className="text-primary font-bold">Título</h3>
  <p className="text-neutral-700">Conteúdo...</p>
</div>
```

### Alertas
```jsx
// Alerta de sucesso
<div className="bg-success-50 border border-success text-success-800 p-4 rounded">
  Operação realizada com sucesso!
</div>

// Alerta de erro
<div className="bg-danger-50 border border-danger text-danger-800 p-4 rounded">
  Erro ao processar a solicitação.
</div>
```