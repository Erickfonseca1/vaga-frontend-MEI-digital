import { Service } from '../types';

// Para desenvolvimento local, use o IP da sua máquina na rede local
// Exemplo: const API_BASE_URL = 'http://192.168.1.100:3001';
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
  }
}; 