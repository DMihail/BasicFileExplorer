import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainStackParamList, NavigationProps} from './types.ts';
import Files from '../screen/Files.tsx';
import showSimpleToast from '../utils/showSimpleToast.ts';
import {EmptyComponent} from '../component/EmptyComponent.tsx';
import HomeSvg from '../../assets/svg/tabs/HomeSvg.tsx';
import {COLORS} from '../const/COLORS.ts';
import FilesSvg from '../../assets/svg/tabs/FilesSvg.tsx';
import CreateSvg from '../../assets/svg/tabs/CreateSvg.tsx';
import PhotosSvg from '../../assets/svg/tabs/PhotosSvg.tsx';
import AccountSvg from '../../assets/svg/tabs/AccountSvg.tsx';
import Header from '../component/files/Header.tsx';
import StackFiles from './stack/FilesStack.tsx';

const Tab = createBottomTabNavigator<MainStackParamList>();

const listeners = ({navigation}: {navigation: NavigationProps}) => ({
  tabPress: (event: {preventDefault: () => void}) => {
    showSimpleToast('Not implemented');
    event.preventDefault();
  },
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Files"
        screenOptions={{
          tabBarInactiveTintColor: COLORS.white,
          tabBarActiveTintColor: COLORS.blue,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="Home"
          component={EmptyComponent}
          listeners={listeners}
          options={{
            tabBarIcon: ({focused}) => (
              <HomeSvg fill={focused ? COLORS.blue : COLORS.white} />
            ),
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="Files"
          component={StackFiles}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <FilesSvg fill={focused ? COLORS.blue : COLORS.white} />
            ),
            title: 'Files',
          }}
        />
        <Tab.Screen
          name="Create"
          component={EmptyComponent}
          listeners={listeners}
          options={{
            tabBarIcon: ({focused}) => (
              <CreateSvg fill={focused ? COLORS.blue : COLORS.white} />
            ),
            title: 'Create',
          }}
        />
        <Tab.Screen
          name="Photos"
          component={EmptyComponent}
          listeners={listeners}
          options={{
            tabBarIcon: ({focused}) => (
              <PhotosSvg fill={focused ? COLORS.blue : COLORS.white} />
            ),
            title: 'Photos',
          }}
        />
        <Tab.Screen
          name="Account"
          component={EmptyComponent}
          listeners={listeners}
          options={{
            tabBarIcon: ({focused}) => (
              <AccountSvg fill={focused ? COLORS.blue : COLORS.white} />
            ),
            title: 'Account',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    backgroundColor: COLORS.darkGray,
  },
  tabBarLabelStyle: {
    fontSize: 13,
    fontFamily: 'Lato-Medium',
    fontWeight: '500',
  },
});
