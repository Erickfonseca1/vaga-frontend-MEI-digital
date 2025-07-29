# 📋 Padrão de Componentes Mobile

## 🎯 **Padrão Aplicado (Baseado no Web)**

O padrão dos componentes mobile foi padronizado seguindo a estrutura dos componentes web para manter consistência entre os projetos.

## 📝 **Estrutura Padrão:**

### **1. Declaração de Props:**
```typescript
type ComponentNameProps = {
  prop1: string;
  prop2: number;
  onAction: (data: any) => void;
};
```

### **2. Declaração do Componente:**
```typescript
const ComponentName = ({ prop1, prop2, onAction }: ComponentNameProps) => {
  // Lógica do componente
  return (
    // JSX
  );
};
```

### **3. Export:**
```typescript
export default ComponentName;
```

## 🔄 **Diferenças entre Web e Mobile:**

### **Web (React + Next.js):**
- **Estilização:** Tailwind CSS (`className="bg-white p-4"`)
- **Props:** `interface` ou `type`
- **Estrutura:** `const Component = ({ props }: Props) => {}`

### **Mobile (React Native + Expo):**
- **Estilização:** StyleSheet (`style={styles.container}`)
- **Props:** `type` (padronizado)
- **Estrutura:** `const Component = ({ props }: Props) => {}`

## 📁 **Componentes Refatorados:**

### **1. ServiceCard:**
```typescript
// Antes
interface ServiceCardProps {
  service: Service;
  onContract: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onContract }) => {
  // ...
};

// Depois
type ServiceCardProps = {
  service: Service;
  onContract: (service: Service) => void;
};

const ServiceCard = ({ service, onContract }: ServiceCardProps) => {
  // ...
};

export default ServiceCard;
```

### **2. SuccessModal:**
```typescript
// Antes
interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
  data: ModalData;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ visible, onClose, data }) => {
  // ...
};

// Depois
type SuccessModalProps = {
  visible: boolean;
  onClose: () => void;
  data: ModalData;
};

const SuccessModal = ({ visible, onClose, data }: SuccessModalProps) => {
  // ...
};

export default SuccessModal;
```

### **3. HomeScreen:**
```typescript
// Antes
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // ...
};

// Depois
type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  // ...
};

export default HomeScreen;
```

### **4. ContractScreen:**
```typescript
// Antes
interface ContractScreenProps {
  navigation: ContractScreenNavigationProp;
  route: ContractScreenRouteProp;
}

export const ContractScreen: React.FC<ContractScreenProps> = ({ navigation, route }) => {
  // ...
};

// Depois
type ContractScreenProps = {
  navigation: ContractScreenNavigationProp;
  route: ContractScreenRouteProp;
};

const ContractScreen = ({ navigation, route }: ContractScreenProps) => {
  // ...
};

export default ContractScreen;
```

## 🔧 **Imports Atualizados:**

### **App.tsx:**
```typescript
// Antes
import { HomeScreen } from './src/screens/HomeScreen';
import { ContractScreen } from './src/screens/ContractScreen';

// Depois
import HomeScreen from './src/screens/HomeScreen';
import ContractScreen from './src/screens/ContractScreen';
```

### **Screens:**
```typescript
// Antes
import { ServiceCard } from '../components/ServiceCard';
import { SuccessModal } from '../components/SuccessModal';

// Depois
import ServiceCard from '../components/ServiceCard';
import SuccessModal from '../components/SuccessModal';
```

## ✅ **Benefícios do Padrão:**

1. **Consistência:** Mesma estrutura entre web e mobile
2. **Legibilidade:** Código mais limpo e organizado
3. **Manutenibilidade:** Fácil de manter e atualizar
4. **Padronização:** Equipe segue o mesmo padrão
5. **Compatibilidade:** Funciona bem com TypeScript

## 🎨 **Estilização Mantida:**

- **Mobile:** StyleSheet com cores da identidade visual
- **Web:** Tailwind CSS com as mesmas cores
- **Consistência:** Mesma paleta de cores em ambos

## 📋 **Checklist de Padrão:**

- [x] Usar `type` em vez de `interface`
- [x] Declaração inline de props
- [x] Export default
- [x] Imports atualizados
- [x] Estrutura consistente
- [x] Estilização padronizada 