import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Files from '../../screen/Files.tsx';
import {FilesStackParamList} from '../types.ts';

const Stack = createNativeStackNavigator<FilesStackParamList>();

function StackFiles() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="StackFiles"
        component={Files}
        initialParams={{
          path: '',
        }}
      />
    </Stack.Navigator>
  );
}

export default StackFiles;
