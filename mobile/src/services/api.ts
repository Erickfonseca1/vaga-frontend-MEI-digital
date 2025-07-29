import { Service, ContractFormData } from '../types';

// const API_BASE_URL = 'http://10.0.2.2:3001'; // Para emulador Android
const API_BASE_URL = 'http://localhost:3001'; // Para desenvolvimento web

export const api = {
  async getServices(): Promise<Service[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/services`);
      if (!response.ok) {
        throw new Error('Erro ao buscar serviços');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro na API:', error);
      throw error;
    }
  },

  async getServiceById(id: number): Promise<Service> {
    try {
      const response = await fetch(`${API_BASE_URL}/services/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar serviço');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro na API:', error);
      throw error;
    }
  },

  async createContract(service: Service, formData: ContractFormData): Promise<any> {
    try {
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

      if (!response.ok) {
        throw new Error('Erro ao criar contrato');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro na API:', error);
      throw error;
    }
  }
}; 