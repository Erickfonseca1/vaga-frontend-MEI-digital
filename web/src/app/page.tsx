'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Service, Contract } from '@/types';
import { api } from '@/services/api';
import ServiceCard from '@/components/ServiceCard';
import ContractCard from '@/components/ContractCard';

const Home = () => {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    try {
      const [servicesData, contractsData] = await Promise.all([
        api.getServices(),
        api.getContracts(),
      ]);
      setServices(servicesData);
      setContracts(contractsData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Sistema de Serviços</h1>
            <button
              onClick={() => router.push('/new-service')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Novo Serviço
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lista de Serviços */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Serviços Disponíveis</h2>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {services.length} serviço{services.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            {services.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-500">Nenhum serviço cadastrado ainda.</p>
                <button
                  onClick={() => router.push('/new-service')}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Cadastrar Primeiro Serviço
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Lista de Contratos */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Serviços Contratados</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {contracts.length} contrato{contracts.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            {contracts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-500">Nenhum serviço contratado ainda.</p>
                <p className="text-sm text-gray-400 mt-2">
                  Os serviços contratados aparecerão aqui.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {contracts.map((contract) => (
                  <ContractCard key={contract.id} contract={contract} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;