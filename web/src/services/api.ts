import { Service, Contract, CreateServiceData } from '@/types';

const API_BASE_URL = 'http://localhost:3001';

export const api = {
  // Serviços
  async getServices(): Promise<Service[]> {
    const response = await fetch(`${API_BASE_URL}/services`);
    return response.json();
  },

  async createService(data: CreateServiceData): Promise<Service> {
    const response = await fetch(`${API_BASE_URL}/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Contratos
  async getContracts(): Promise<Contract[]> {
    const response = await fetch(`${API_BASE_URL}/contracts`);
    return response.json();
  },

  async createContract(service: Service): Promise<Contract> {
    const contractData = {
      serviceId: service.id,
      serviceName: service.name,
      servicePrice: service.price,
      contractDate: new Date().toISOString().split('T')[0],
      status: 'ativo' as const,
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