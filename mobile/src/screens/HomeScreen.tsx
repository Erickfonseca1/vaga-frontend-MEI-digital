import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ServiceCard from '../components/ServiceCard';
import { Service } from '../types';
import { api } from '../services/api';
import { colors } from '../styles/colors';
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
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Carregando serviços...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Serviços Disponíveis</Text>
        <Text style={styles.subtitle}>
          Escolha um serviço para contratar
        </Text>
      </View>

      <FlatList
        data={services}
        renderItem={renderService}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhum serviço disponível no momento.
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
  },
  listContainer: {
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: colors.text.secondary,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});

export default HomeScreen; 