import React from 'react';
import { View, Text } from 'react-native';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
};

const Badge = ({ children, variant = 'primary', size = 'md' }: BadgeProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-100 text-blue-800';
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'danger':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs';
      case 'md':
        return 'px-3 py-1 text-sm';
      case 'lg':
        return 'px-4 py-2 text-base';
      default:
        return 'px-3 py-1 text-sm';
    }
  };

  return (
    <View className={`rounded-full ${getVariantStyles()} ${getSizeStyles()}`}>
      <Text className={`font-medium ${getVariantStyles().split(' ')[1]}`}>
        {children}
      </Text>
    </View>
  );
};

export default Badge; 