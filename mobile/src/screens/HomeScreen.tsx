import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ServiceCard from '../components/ServiceCard';
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

  const renderService = ({ item }: { item: Service }) => (
    <ServiceCard service={item} onContract={handleContract} />
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#007bff" />
        <Text className="mt-4 text-base text-gray-600">Carregando serviços...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <View className="p-5 pt-15 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900 mb-2">Serviços Disponíveis</Text>
        <Text className="text-base text-gray-600">
          Escolha um serviço para contratar
        </Text>
      </View>

      <FlatList
        data={services}
        renderItem={renderService}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 20 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#007bff']}
            tintColor="#007bff"
          />
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center py-15">
            <Text className="text-base text-gray-600 text-center">
              Nenhum serviço disponível no momento.
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default HomeScreen; 