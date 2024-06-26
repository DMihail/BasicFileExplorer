import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FilesStackParamList} from '../../navigation/types.ts';
import DownloadSvg from '../../../assets/svg/fileHeader/DownloadSvg.tsx';
import LoupeSvg from '../../../assets/svg/fileHeader/LoupeSvg.tsx';
import BackSvg from '../../../assets/svg/fileHeader/BackSvg.tsx';
import {COLORS} from '../../const/COLORS.ts';
import DotsSvg from '../../../assets/svg/DotsSvg.tsx';
import CheckBoxSvg from '../../../assets/svg/fileHeader/CheckBoxSvg.tsx';
import showSimpleToast from '../../utils/showSimpleToast.ts';

const Header: FC = () => {
  const navigation: NativeStackNavigationProp<
    FilesStackParamList,
    'StackFiles'
  > = useNavigation();
  const route: RouteProp<FilesStackParamList, 'StackFiles'> = useRoute();
  const insets = useSafeAreaInsets();
  const onPress = () => showSimpleToast();
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes?.length - 2];

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <TouchableOpacity
        style={styles.backContainer}
        disabled={!route.params.path}
        onPress={() => navigation.goBack()}>
        {prevRoute && typeof prevRoute.params.path === 'string' && (
          <>
            <BackSvg height={18} width={18} />
            <Text style={styles.title}>
              {prevRoute.params.path
                ? prevRoute.params.path.replace('/', '')
                : 'root'}
            </Text>
          </>
        )}
      </TouchableOpacity>

      <View style={styles.toolsContainer}>
        <TouchableOpacity onPress={onPress}>
          <LoupeSvg width={18} height={18} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <CheckBoxSvg width={18} height={18} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <DownloadSvg width={18} height={18} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <DotsSvg width={18} height={18} fill={COLORS.darkBlue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.black,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
    marginLeft: 8,
    color: COLORS.darkBlue,
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
