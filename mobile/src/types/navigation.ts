import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Service } from './index';

export type RootStackParamList = {
  Home: undefined;
  Contract: {
    service: Service;
  };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type ContractScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Contract'>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type ContractScreenRouteProp = RouteProp<RootStackParamList, 'Contract'>; 