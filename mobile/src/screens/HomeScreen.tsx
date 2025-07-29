import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ServiceCard from '../components/ServiceCard';
import Header from '../components/Header';
import { Service } from '../types';
import { api } from '../services/api';
import { HomeScreenNavigationProp } from '../types/navigation';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchServices = async () => {
    try {
      const data = await api.getServices();
      setServices(data);
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível carregar os serviços. Tente novamente.',
        [{ text: 'OK' }]
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchServices();
  };

  const handleContract = (service: Service) => {
    navigation.navigate('Contract', { service });
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <ActivityIndicator size="large" color="#007bff" />
        <Text className="mt-4 text-base text-gray-600">Carregando serviços...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      <Header title="Sistema de Serviços" />
      
      <View className="px-4 py-4 bg-gray-50">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-xl font-bold text-gray-900">Serviços Disponíveis</Text>
          <View className="bg-blue-100 px-3 py-1 rounded-full">
            <Text className="text-blue-800 text-sm font-medium">
              {services.length} serviço{services.length !== 1 ? 's' : ''}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1 mb-10"
        contentContainerStyle={{ 
          paddingHorizontal: 8,
          paddingBottom: 20
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#007bff']}
            tintColor="#007bff"
          />
        }
        showsVerticalScrollIndicator={false}
      >
        {services.length === 0 ? (
          <View className="flex-1 justify-center items-center py-20">
            <Text className="text-base text-gray-600 text-center">
              Nenhum serviço disponível no momento.
            </Text>
          </View>
        ) : (
          services.map((service) => (
            <View key={service.id} className="mb-3">
              <ServiceCard service={service} onContract={handleContract} />
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen; 