import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DownloadSvg from '../../../assets/svg/fileHeader/DownloadSvg.tsx';
import LoupeSvg from '../../../assets/svg/fileHeader/LoupeSvg.tsx';
import BackSvg from '../../../assets/svg/fileHeader/BackSvg.tsx';
import {COLORS} from '../../const/COLORS.ts';
import DotsSvg from '../../../assets/svg/DotsSvg.tsx';
import CheckBoxSvg from '../../../assets/svg/fileHeader/CheckBoxSvg.tsx';
import showSimpleToast from '../../utils/showSimpleToast.ts';

const Header: FC = () => {
  const navigation = useNavigation();
  const onPress = () => showSimpleToast();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}>
        <BackSvg height={18} width={18} />
        <Text style={styles.title}>Files</Text>
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
    height: 60,
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
