export interface Service {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface Contract {
  id: string;
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  contractDate: string;
  status: 'ativo' | 'cancelado' | 'concluido';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

export interface ContractFormData {
  fullName: string;
  email: string;
  phone: string;
}

export interface ContractData extends ContractFormData {
  serviceName: string;
  price: string;
}

export interface CreateServiceData {
  name: string;
  price: number;
  description?: string;
}

export interface FormErrors {
  name?: string;
  price?: string;
  description?: string;
} 