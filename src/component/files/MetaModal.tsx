import React, {FC, useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../const/COLORS.ts';
import {getMetadata} from '../../redux/saga/dropbox.ts';
import showSimpleToast from '../../utils/showSimpleToast.ts';
import {DropBoxFile} from '../../utils/types.ts';
import CloseSvg from '../../../assets/svg/CloseSvg.tsx';
import Loader from '../Loader.tsx';

type Props = {
  visible: boolean;
  setVisible: (v: boolean) => void;
  path: string;
};
const MetaModal: FC<Props> = ({visible, setVisible, path}) => {
  const [meta, setMeta] = useState<DropBoxFile>();
  const [load, setLoad] = useState<boolean>(true);

  const close = () => setVisible(!visible);
  const getMeta = async () => {
    try {
      setLoad(true);
      const data = await getMetadata(path);
      setMeta(data);
    } catch (e) {
      if (__DEV__) {
        console.log(e);
      }
      showSimpleToast('Failed to get metadata');
      close();
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getMeta();
  }, [path]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={close}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Metadata</Text>
          <TouchableOpacity style={styles.close} onPress={close}>
            <CloseSvg />
          </TouchableOpacity>
          {load ? (
            <Loader />
          ) : (
            <ScrollView>
              {meta &&
                Object.entries(meta).map(item => (
                  <View style={styles.valueContainer}>
                    <Text style={styles.title}>
                      {item[0].replace(/[^\w\s]|_/g, ' ').trim()}
                    </Text>
                    <Text style={styles.value}>{item[1].toString()}</Text>
                  </View>
                ))}
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: width - 32,
    height: height * 0.7,
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.black,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
  },
  value: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.black,
  },
  valueContainer: {
    paddingVertical: 10,
  },
  close: {
    position: 'absolute',
    top: 23,
    right: 20,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MetaModal;
