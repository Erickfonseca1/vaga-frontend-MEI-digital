import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import ContractScreen from './src/screens/ContractScreen';
import { colors } from './src/styles/colors';
import { RootStackParamList } from './src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contract" component={ContractScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
