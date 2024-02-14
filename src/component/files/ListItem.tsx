import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FolderSvg from '../../../assets/svg/FolderSvg.tsx';
import FileSvg from '../../../assets/svg/FileSvg.tsx';
import {DropBoxFolder} from '../../utiils/types.ts';
import {View} from 'react-native';
import DotsMenu from './DotsMenu.tsx';

const ListItem: FC<DropBoxFolder> = ({id, name, type, path_display}) => {
  const isFolder = type === 'folder';
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {isFolder ? <FolderSvg /> : <FileSvg />}
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
      <DotsMenu id={id} type={type} path_display={path_display} />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 8,
  },
});
