import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../const/COLORS.ts';
import BackSvg from '../../../assets/svg/fileHeader/BackSvg.tsx';
import ListAsIconSvg from '../../../assets/svg/ListAsIconSvg.tsx';
import showSimpleToast from '../../utils/showSimpleToast.ts';

const ListSettings = () => {
  const onPress = () => showSimpleToast();
  return (
    <View style={[styles.container, styles.row]}>
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.title}>Name</Text>
        <BackSvg
          width={10}
          height={10}
          stroke={COLORS.white}
          style={styles.arrow}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <ListAsIconSvg />
      </TouchableOpacity>
    </View>
  );
};

export default ListSettings;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 15,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: COLORS.white,
  },
  arrow: {
    transform: [{rotate: '-90 deg'}],
    marginTop: 4,
    marginLeft: 5,
  },
});
