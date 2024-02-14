import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FilesStackParamList} from '../../navigation/types.ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FolderSvg from '../../../assets/svg/FolderSvg.tsx';
import FileSvg from '../../../assets/svg/FileSvg.tsx';
import {DropBoxFolder, FileType} from '../../utils/types.ts';
import DotsMenu from './DotsMenu.tsx';
import {COLORS} from '../../const/COLORS.ts';

type Props = DropBoxFolder & {type: FileType};

const ListItem: FC<Props> = ({id, name, type, path_display}) => {
  const isFolder = type === 'folder';
  const navigation: NativeStackNavigationProp<
    FilesStackParamList,
    'StackFiles'
  > = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.push(isFolder ? 'StackFiles' : 'ImageView', {
            path: path_display,
          })
        }>
        {isFolder ? <FolderSvg /> : <FileSvg />}
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode={'middle'}>
        {name}
      </Text>
      <DotsMenu id={id} type={type} path_display={path_display} />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: 80,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 8,
    color: COLORS.white,
  },
});
