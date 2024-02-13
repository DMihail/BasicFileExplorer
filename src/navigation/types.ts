import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Files: undefined;
  Create: undefined;
  Photos: undefined;
  Account: undefined;
};

export type MainStackProps<Screen extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, Screen>;

export interface NavigationProps {
  navigation: NativeStackNavigationProp<MainStackParamList>;
}
