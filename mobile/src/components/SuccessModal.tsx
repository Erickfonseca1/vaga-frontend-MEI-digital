import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';

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
      <View className="flex-1 bg-black/50 justify-center items-center p-5">
        <View className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg">
          <View className="items-center mb-5">
            <Text className="text-xl font-bold text-success text-center">Contratação Realizada</Text>
          </View>

          <View className="mb-5">
            <View className="flex-row justify-between items-start mb-3 pb-2 border-b border-gray-200">
              <Text className="text-sm font-semibold text-gray-600 flex-1">Serviço:</Text>
              <Text className="text-sm text-gray-900 flex-2 text-right">{data.serviceName}</Text>
            </View>

            <View className="flex-row justify-between items-start mb-3 pb-2 border-b border-gray-200">
              <Text className="text-sm font-semibold text-gray-600 flex-1">Nome:</Text>
              <Text className="text-sm text-gray-900 flex-2 text-right">{data.fullName}</Text>
            </View>

            <View className="flex-row justify-between items-start mb-3 pb-2 border-b border-gray-200">
              <Text className="text-sm font-semibold text-gray-600 flex-1">E-mail:</Text>
              <Text className="text-sm text-gray-900 flex-2 text-right">{data.email}</Text>
            </View>

            <View className="flex-row justify-between items-start mb-3 pb-2 border-b border-gray-200">
              <Text className="text-sm font-semibold text-gray-600 flex-1">Telefone:</Text>
              <Text className="text-sm text-gray-900 flex-2 text-right">{data.phone}</Text>
            </View>

            <View className="flex-row justify-between items-start mb-3 pb-2 border-b border-gray-200">
              <Text className="text-sm font-semibold text-gray-600 flex-1">Preço:</Text>
              <Text className="text-sm text-primary font-bold flex-2 text-right">{data.price}</Text>
            </View>

            <View className="flex-row justify-between items-start mb-3 pb-2 border-b border-gray-200">
              <Text className="text-sm font-semibold text-gray-600 flex-1">Data/Hora:</Text>
              <Text className="text-sm text-gray-900 flex-2 text-right">
                {new Date().toLocaleString('pt-BR')}
              </Text>
            </View>
          </View>

          <View className="items-center">
            <Text className="text-xs text-gray-600 text-center mb-4 italic">
              Verifique o {Platform.OS === 'web' ? 'console do navegador' : 'terminal do Expo'} para mais detalhes
            </Text>
            
            <TouchableOpacity className="bg-success rounded-lg py-3 px-8 min-w-30 items-center" onPress={onClose}>
              <Text className="text-white text-base font-semibold">Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal; 