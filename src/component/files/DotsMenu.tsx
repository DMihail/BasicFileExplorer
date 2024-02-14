import React, {FC, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import ContextMenu from 'react-native-context-menu-view';
import {COLORS} from '../../const/COLORS.ts';
import DotsSvg from '../../../assets/svg/DotsSvg.tsx';
import {FileType} from '../../utils/types.ts';
import {SagaHelper} from '../../redux';
import {FilesContext} from '../../screen/Files.tsx';

type Props = {
  id: string;
  type: FileType;
  path_display: string;
};

const menus = {
  folder: [{title: 'Removing'}],
  file: [{title: 'Deleting'}, {title: 'Get Info'}],
};

const DotsMenu: FC<Props> = ({id, type, path_display}) => {
  const context = useContext(FilesContext);
  const action = async (name: string) => {
    switch (name) {
      case 'Removing':
        await SagaHelper.run(['dropbox', 'removeFileOrFolder'], path_display);
        context?.setLoad(true);
        break;
      case 'Deleting':
        await SagaHelper.run(['dropbox', 'removeFileOrFolder'], path_display);
        context?.setLoad(true);
        break;
      case 'Get Info':
        break;
      default:
        break;
    }
  };

  return (
    <ContextMenu
      actions={menus[type]}
      dropdownMenuMode={true}
      onPress={e => {
        action(e.nativeEvent.name);
      }}>
      <View style={styles.container}>
        <DotsSvg width={14} height={14} fill={COLORS.white} />
      </View>
    </ContextMenu>
  );
};

export default DotsMenu;

const styles = StyleSheet.create({
  container: {
    width: 82,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
