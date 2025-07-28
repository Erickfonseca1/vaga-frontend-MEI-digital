'use client';

import { Service } from '@/types';

type ServiceCardProps = {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
        <span className="text-2xl font-bold text-green-600">
          R$ {service.price.toFixed(2)}
        </span>
      </div>
      
      {service.description && (
        <p className="text-gray-600">{service.description}</p>
      )}
    </div>
  );
}

export default ServiceCard;