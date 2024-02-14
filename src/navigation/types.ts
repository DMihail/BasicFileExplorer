import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Files: FilesStackParamList;
  Create: undefined;
  Photos: undefined;
  Account: undefined;
};

export type MainStackProps<Screen extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, Screen>;

export type FilesStackParamList = {
  StackFiles: {path: string};
};

export type FilesStackProps<Screen extends keyof FilesStackParamList> =
  NativeStackScreenProps<FilesStackParamList, Screen>;

export interface NavigationProps {
  navigation: NativeStackNavigationProp<MainStackParamList>;
}
