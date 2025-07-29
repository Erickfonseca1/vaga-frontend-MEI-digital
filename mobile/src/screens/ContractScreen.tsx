import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Service, ContractFormData, ContractData } from '../types';
import { ContractScreenNavigationProp, ContractScreenRouteProp } from '../types/navigation';
import SuccessModal from '../components/SuccessModal';
import { api } from '../services/api';

type ContractScreenProps = {
  navigation: ContractScreenNavigationProp;
  route: ContractScreenRouteProp;
};

const schema = yup.object({
  fullName: yup
    .string()
    .required('Nome completo é obrigatório')
    .min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('E-mail inválido'),
  phone: yup
    .string()
    .required('Telefone é obrigatório')
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone deve estar no formato (99) 99999-9999'),
});

const ContractScreen = ({ navigation, route }: ContractScreenProps) => {
  const { service } = route.params;
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [contractData, setContractData] = useState<any>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContractFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
    },
  });

  const formatPhone = (text: string) => {
    const numbers = text.replace(/\D/g, '');
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const onSubmit = async (data: ContractFormData) => {
    try {
      // Exibir dados técnicos no console
      console.log('=== CONTRATAÇÃO DE SERVIÇO ===');
      console.log('Timestamp:', new Date().toISOString());
      console.log('Service ID:', service.id);
      console.log('Service Name:', service.name);
      console.log('Service Price:', service.price);
      console.log('Customer Name:', data.fullName);
      console.log('Customer Email:', data.email);
      console.log('Customer Phone:', data.phone);
      console.log('Form Data:', JSON.stringify(data, null, 2));
      console.log('Service Data:', JSON.stringify(service, null, 2));
      console.log('================================');

      // Persistir contrato no json-server
      const createdContract = await api.createContract(service, data);
      console.log('Contract Created:', JSON.stringify(createdContract, null, 2));

      // Formatar preço para exibição
      const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(service.price);

      // Salvar dados para o modal
      setContractData({
        serviceName: service.name,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        price: formattedPrice,
      });

      // Mostrar modal de sucesso
      setShowSuccessModal(true);

    } catch (error) {
      console.error('Erro ao criar contrato:', error);
      Alert.alert(
        'Erro',
        'Não foi possível criar o contrato. Tente novamente.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="p-5 pt-15 bg-white border-b border-gray-200">
          <TouchableOpacity
            className="mb-4"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-base text-primary font-medium">← Voltar</Text>
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-gray-900">Contratar Serviço</Text>
        </View>

        <View className="p-5 bg-neutral mx-5 rounded-xl">
          <Text className="text-xl font-semibold text-gray-900 mb-2">{service.name}</Text>
          <Text className="text-2xl font-bold text-primary mb-2">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(service.price)}
          </Text>
          {service.description && (
            <Text className="text-sm text-gray-600 leading-5">{service.description}</Text>
          )}
        </View>

        <View className="p-5">
          <Text className="text-xl font-semibold text-gray-900 mb-5">Dados Pessoais</Text>

          <View className="mb-5">
            <Text className="text-base font-medium text-gray-900 mb-2">Nome Completo *</Text>
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className={`border border-gray-300 rounded-lg p-4 text-base text-gray-900 bg-white ${
                    errors.fullName ? 'border-danger' : ''
                  }`}
                  placeholder="Digite seu nome completo"
                  placeholderTextColor="#9ca3af"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="words"
                />
              )}
            />
            {errors.fullName && (
              <Text className="text-danger text-sm mt-1">{errors.fullName.message}</Text>
            )}
          </View>

          <View className="mb-5">
            <Text className="text-base font-medium text-gray-900 mb-2">E-mail *</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className={`border border-gray-300 rounded-lg p-4 text-base text-gray-900 bg-white ${
                    errors.email ? 'border-danger' : ''
                  }`}
                  placeholder="Digite seu e-mail"
                  placeholderTextColor="#9ca3af"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              )}
            />
            {errors.email && (
              <Text className="text-danger text-sm mt-1">{errors.email.message}</Text>
            )}
          </View>

          <View className="mb-5">
            <Text className="text-base font-medium text-gray-900 mb-2">Telefone *</Text>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className={`border border-gray-300 rounded-lg p-4 text-base text-gray-900 bg-white ${
                    errors.phone ? 'border-danger' : ''
                  }`}
                  placeholder="(99) 99999-9999"
                  placeholderTextColor="#9ca3af"
                  value={value}
                  onChangeText={(text) => onChange(formatPhone(text))}
                  onBlur={onBlur}
                  keyboardType="phone-pad"
                  maxLength={15}
                />
              )}
            />
            {errors.phone && (
              <Text className="text-danger text-sm mt-1">{errors.phone.message}</Text>
            )}
          </View>

          <TouchableOpacity
            className={`rounded-lg p-4 items-center mt-5 ${
              isSubmitting ? 'bg-gray-400' : 'bg-success'
            }`}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            <Text className="text-white text-base font-semibold">
              {isSubmitting ? 'Processando...' : 'Confirmar Contratação'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal de Sucesso */}
      {contractData && (
        <SuccessModal
          visible={showSuccessModal}
          onClose={handleCloseModal}
          data={contractData}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default ContractScreen; 