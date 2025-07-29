import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Service } from '../types';
import { colors } from '../styles/colors';

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
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{service.name}</Text>
        <Text style={styles.price}>{formatPrice(service.price)}</Text>
        {service.description && (
          <Text style={styles.description}>{service.description}</Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onContract(service)}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Contratar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: colors.gray[900],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 20,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ServiceCard; 