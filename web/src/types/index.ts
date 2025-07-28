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