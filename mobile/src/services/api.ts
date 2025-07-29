import { Service, Contract, ContractFormData } from '../types';

const API_BASE_URL = 'http://localhost:3001';

export const api = {
  // Serviços
  async getServices(): Promise<Service[]> {
    const response = await fetch(`${API_BASE_URL}/services`);
    return response.json();
  },

  async getServiceById(id: string): Promise<Service> {
    const response = await fetch(`${API_BASE_URL}/services/${id}`);
    return response.json();
  },

  // Contratos
  async getContracts(): Promise<Contract[]> {
    const response = await fetch(`${API_BASE_URL}/contracts`);
    return response.json();
  },

  async createContract(service: Service, formData: ContractFormData): Promise<Contract> {
    const contractData = {
      serviceId: service.id,
      serviceName: service.name,
      servicePrice: service.price,
      contractDate: new Date().toISOString().split('T')[0],
      status: 'ativo' as const,
      customerName: formData.fullName,
      customerEmail: formData.email,
      customerPhone: formData.phone,
    };

    const response = await fetch(`${API_BASE_URL}/contracts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contractData),
    });
    return response.json();
  },
}; 