const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Adicionar resolução para problemas de módulos
config.resolver.alias = {
  ...config.resolver.alias,
  'react-native$': 'react-native-web',
};

// Configurações adicionais para resolver problemas de bundling
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = config; 