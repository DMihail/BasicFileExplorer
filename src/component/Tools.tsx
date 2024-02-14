import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import ShareSvg from '../../assets/svg/tools/ShareSvg.tsx';
import UploadFileSvg from '../../assets/svg/tools/UploadFileSvg.tsx';
import NewFolderSvg from '../../assets/svg/tools/NewFolderSvg.tsx';
import ScanSvg from '../../assets/svg/tools/ScanSvg.tsx';
import {COLORS} from '../const/COLORS.ts';
import showSimpleToast from '../utils/showSimpleToast.ts';

const Tools: FC = () => {
  const onPress = () => showSimpleToast();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tool} onPress={onPress}>
        <ShareSvg />
        <Text style={styles.toolTitle}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tool} onPress={onPress}>
        <UploadFileSvg />
        <Text style={styles.toolTitle}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tool} onPress={onPress}>
        <NewFolderSvg />
        <Text style={styles.toolTitle}>Folder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tool} onPress={onPress}>
        <ScanSvg />
        <Text style={styles.toolTitle}>Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tools;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 8,
  },
  tool: {
    backgroundColor: COLORS.grey,
    width: 82,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  toolTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: COLORS.white,
    marginLeft: 7,
  },
});
