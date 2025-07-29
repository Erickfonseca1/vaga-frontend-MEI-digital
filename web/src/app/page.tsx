'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Service, Contract } from '@/types';
import { api } from '@/services/api';
import ServiceCard from '@/components/ServiceCard';
import ContractCard from '@/components/ContractCard';
import Header from '@/components/Header';
import LoadingSpinner from '@/components/LoadingSpinner';
import ClientOnly from '@/components/ClientOnly';

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

  return (
    <ClientOnly fallback={<LoadingSpinner message="Inicializando..." />}>
      <div className="min-h-screen bg-gray-50">
        <Header />  

        {isLoading ? (
          <LoadingSpinner message="Carregando dados..." />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
              {/* Lista de Serviços */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Serviços Disponíveis</h2>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">
                    {services.length} serviço{services.length !== 1 ? 's' : ''}
                  </span>
                </div>
                
                {services.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center">
                    <p className="text-gray-500">Nenhum serviço cadastrado ainda.</p>
                    <button
                      onClick={() => router.push('/new-service')}
                      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
                    >
                      Cadastrar Primeiro Serviço
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
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
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Serviços Contratados</h2>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">
                    {contracts.length} contrato{contracts.length !== 1 ? 's' : ''}
                  </span>
                </div>
                
                {contracts.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center">
                    <p className="text-gray-500">Nenhum serviço contratado ainda.</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Os serviços contratados aparecerão aqui.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {contracts.map((contract) => (
                      <ContractCard key={contract.id} contract={contract} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </ClientOnly>
  );
};

export default Home;