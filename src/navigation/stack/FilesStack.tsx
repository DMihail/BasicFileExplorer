import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Files from '../../screen/Files.tsx';
import {FilesStackParamList} from '../types.ts';
import Header from '../../component/files/Header.tsx';
import ImageView from '../../screen/ImageView.tsx';

const Stack = createNativeStackNavigator<FilesStackParamList>();

function StackFiles() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackFiles"
        component={Files}
        options={{
          header: () => <Header />,
        }}
        initialParams={{
          path: '',
        }}
      />
      <Stack.Screen
        name="ImageView"
        component={ImageView}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackFiles;
