import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FilesStackParamList} from '../../navigation/types.ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FolderSvg from '../../../assets/svg/FolderSvg.tsx';
import FileSvg from '../../../assets/svg/FileSvg.tsx';
import {DropBoxFolder, FileType} from '../../utils/types.ts';
import DotsMenu from './DotsMenu.tsx';
import {COLORS} from '../../const/COLORS.ts';
import {imageRegExp} from '../../const/rules.ts';
import showSimpleToast from '../../utils/showSimpleToast.ts';
import MetaModal from './MetaModal.tsx';

type Props = DropBoxFolder & {type: FileType};

const ListItem: FC<Props> = ({id, name, type, path_display}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const isFolder = type === 'folder';
  const isImage = imageRegExp.test(name);
  const navigation: NativeStackNavigationProp<
    FilesStackParamList,
    'StackFiles'
  > = useNavigation();

  const pressFunc = () => {
    if (isFolder || isImage) {
      navigation.push(isFolder ? 'StackFiles' : 'ImageView', {
        path: path_display,
      });
    } else {
      showSimpleToast();
    }
  };

  const showModal = () => setModalVisible(true);

  return (
    <View style={styles.container}>
      <MetaModal
        visible={modalVisible}
        setVisible={setModalVisible}
        path={path_display}
      />
      <TouchableOpacity onPress={pressFunc}>
        {isFolder ? <FolderSvg /> : <FileSvg />}
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode={'middle'}>
        {name}
      </Text>
      <DotsMenu
        id={id}
        type={type}
        path_display={path_display}
        showModal={showModal}
      />
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
