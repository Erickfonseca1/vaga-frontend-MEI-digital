'use client';

import { Service } from '@/types';

type ServiceCardProps = {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    });
  };

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-1 min-w-0">{service.name}</h3>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto whitespace-nowrap">
          {formatPrice(service.price)}
        </span>
      </div>
      
      {service.description && (
        <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3">{service.description}</p>
      )}
    </div>
  );
}

export default ServiceCard;