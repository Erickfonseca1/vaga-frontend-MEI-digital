import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Service, ContractFormData, ContractData } from '../types';
import { colors } from '../styles/colors';
import { ContractScreenNavigationProp, ContractScreenRouteProp } from '../types/navigation';
import SuccessModal from '../components/SuccessModal';

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

  const onSubmit = (data: ContractFormData) => {
    const contractDataObj: ContractData = {
      ...data,
      serviceName: service.name,
    };

    // Impressão no console dos dados do formulário + nome do serviço
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(service.price);

    // Log detalhado para o terminal do Expo
    console.log('\n');
    console.log('🚀 === DADOS DA CONTRATAÇÃO === 🚀');
    console.log('📋 Serviço:', service.name);
    console.log('👤 Nome completo:', data.fullName);
    console.log('📧 E-mail:', data.email);
    console.log('📞 Telefone:', data.phone);
    console.log('💰 Preço do serviço:', formattedPrice);
    console.log('📅 Data/Hora:', new Date().toLocaleString('pt-BR'));
    console.log('🎯 === FIM DOS DADOS === 🚀');
    console.log('\n');

    // Log adicional para garantir que apareça no terminal
    console.warn('⚠️ CONTRATAÇÃO REALIZADA - VERIFIQUE OS LOGS ACIMA ⚠️');
    
    // Para web, também mostrar no console do navegador
    if (Platform.OS === 'web') {
      console.group('📋 DETALHES DA CONTRATAÇÃO');
      console.table({
        'Serviço': service.name,
        'Nome': data.fullName,
        'E-mail': data.email,
        'Telefone': data.phone,
        'Preço': formattedPrice,
        'Data/Hora': new Date().toLocaleString('pt-BR')
      });
      console.groupEnd();
    }

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
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>← Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Contratar Serviço</Text>
        </View>

        <View style={styles.serviceInfo}>
          <Text style={styles.serviceName}>{service.name}</Text>
          <Text style={styles.servicePrice}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(service.price)}
          </Text>
          {service.description && (
            <Text style={styles.serviceDescription}>{service.description}</Text>
          )}
        </View>

        <View style={styles.form}>
          <Text style={styles.formTitle}>Dados Pessoais</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome Completo *</Text>
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    styles.input,
                    errors.fullName && styles.inputError,
                  ]}
                  placeholder="Digite seu nome completo"
                  placeholderTextColor={colors.text.disabled}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="words"
                />
              )}
            />
            {errors.fullName && (
              <Text style={styles.errorText}>{errors.fullName.message}</Text>
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-mail *</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    styles.input,
                    errors.email && styles.inputError,
                  ]}
                  placeholder="Digite seu e-mail"
                  placeholderTextColor={colors.text.disabled}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              )}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Telefone *</Text>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    styles.input,
                    errors.phone && styles.inputError,
                  ]}
                  placeholder="(99) 99999-9999"
                  placeholderTextColor={colors.text.disabled}
                  value={value}
                  onChangeText={(text) => onChange(formatPhone(text))}
                  onBlur={onBlur}
                  keyboardType="phone-pad"
                  maxLength={15}
                />
              )}
            />
            {errors.phone && (
              <Text style={styles.errorText}>{errors.phone.message}</Text>
            )}
          </View>

          <TouchableOpacity
            style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            <Text style={styles.submitButtonText}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text.primary,
  },
  serviceInfo: {
    padding: 20,
    backgroundColor: colors.neutral,
    margin: 20,
    borderRadius: 12,
  },
  serviceName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 8,
  },
  servicePrice: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 20,
  },
  form: {
    padding: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border.medium,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: colors.text.primary,
    backgroundColor: colors.surface,
  },
  inputError: {
    borderColor: colors.danger,
  },
  errorText: {
    color: colors.danger,
    fontSize: 14,
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: colors.success,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonDisabled: {
    backgroundColor: colors.gray[400],
  },
  submitButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ContractScreen; 