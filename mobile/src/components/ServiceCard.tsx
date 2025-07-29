import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Service } from '../types';

type ServiceCardProps = {
  service: Service;
  onContract: (service: Service) => void;
};

const ServiceCard = ({ service, onContract }: ServiceCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <View className="bg-white rounded-xl p-4 mb-3 shadow-sm">
      <View className="mb-4">
        <Text className="text-lg font-semibold text-gray-900 mb-2">{service.name}</Text>
        <Text className="text-xl font-bold text-primary mb-2">{formatPrice(service.price)}</Text>
        {service.description && (
          <Text className="text-sm text-gray-600 leading-5">{service.description}</Text>
        )}
      </View>
      <TouchableOpacity
        className="bg-primary rounded-lg py-3 px-6 items-center"
        onPress={() => onContract(service)}
        activeOpacity={0.8}
      >
        <Text className="text-white text-base font-semibold">Contratar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceCard; 