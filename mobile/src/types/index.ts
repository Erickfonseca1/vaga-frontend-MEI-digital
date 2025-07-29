export interface Service {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export interface ContractFormData {
  fullName: string;
  email: string;
  phone: string;
}

export interface ContractData extends ContractFormData {
  serviceName: string;
} 