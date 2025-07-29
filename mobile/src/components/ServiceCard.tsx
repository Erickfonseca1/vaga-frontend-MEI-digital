import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Service } from '../types';
import Badge from './Badge';

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
    <View className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <View className="flex-row justify-between items-start mb-3">
        <Text className="text-lg font-semibold text-gray-900 flex-1 mr-3" numberOfLines={2}>
          {service.name}
        </Text>
        <Badge variant="primary" size="md">
          {formatPrice(service.price)}
        </Badge>
      </View>
      
      {service.description && (
        <Text className="text-sm text-gray-600 mb-4 leading-5" numberOfLines={3}>
          {service.description}
        </Text>
      )}
      
      <TouchableOpacity
        className="bg-blue-600 rounded-md py-3 px-4 items-center"
        onPress={() => onContract(service)}
        activeOpacity={0.8}
      >
        <Text className="text-white text-base font-semibold">Contratar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceCard; 