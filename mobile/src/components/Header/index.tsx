import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
};

const Header = ({ title, showBackButton = false, onBackPress }: HeaderProps) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View className="bg-white border-b border-gray-200 px-4 py-4 pt-12">
      <View className="flex-row items-center justify-between">
        {showBackButton && (
          <TouchableOpacity
            onPress={handleBackPress}
            className="p-2 -ml-2"
            activeOpacity={0.7}
          >
            <Text className="text-blue-600 text-base font-medium">← Voltar</Text>
          </TouchableOpacity>
        )}
        
        <View className="flex-1">
          <Text className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
            {title}
          </Text>
        </View>
        
        {showBackButton && (
          <View className="w-16" />
        )}
      </View>
    </View>
  );
};

export default Header; 