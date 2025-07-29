import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Platform,
} from 'react-native';
import { colors } from '../styles/colors';

type SuccessModalProps = {
  visible: boolean;
  onClose: () => void;
  data: {
    serviceName: string;
    fullName: string;
    email: string;
    phone: string;
    price: string;
  };
};

const SuccessModal = ({ visible, onClose, data }: SuccessModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.icon}>✅</Text>
            <Text style={styles.title}>Contratação Realizada!</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.dataRow}>
              <Text style={styles.label}>Serviço:</Text>
              <Text style={styles.value}>{data.serviceName}</Text>
            </View>

            <View style={styles.dataRow}>
              <Text style={styles.label}>Nome:</Text>
              <Text style={styles.value}>{data.fullName}</Text>
            </View>

            <View style={styles.dataRow}>
              <Text style={styles.label}>E-mail:</Text>
              <Text style={styles.value}>{data.email}</Text>
            </View>

            <View style={styles.dataRow}>
              <Text style={styles.label}>Telefone:</Text>
              <Text style={styles.value}>{data.phone}</Text>
            </View>

            <View style={styles.dataRow}>
              <Text style={styles.label}>Preço:</Text>
              <Text style={[styles.value, styles.price]}>{data.price}</Text>
            </View>

            <View style={styles.dataRow}>
              <Text style={styles.label}>Data/Hora:</Text>
              <Text style={styles.value}>
                {new Date().toLocaleString('pt-BR')}
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.consoleInfo}>
              💡 Verifique o {Platform.OS === 'web' ? 'console do navegador' : 'terminal do Expo'} para mais detalhes
            </Text>
            
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modal: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    shadowColor: colors.gray[900],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 48,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.success,
    textAlign: 'center',
  },
  content: {
    marginBottom: 20,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.secondary,
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: colors.text.primary,
    flex: 2,
    textAlign: 'right',
  },
  price: {
    color: colors.primary,
    fontWeight: '700',
  },
  footer: {
    alignItems: 'center',
  },
  consoleInfo: {
    fontSize: 12,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: colors.success,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SuccessModal; 