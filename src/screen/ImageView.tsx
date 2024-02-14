import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../const/COLORS.ts';
import {FilesStackProps} from '../navigation/types.ts';
import Loader from '../component/Loader.tsx';
import {getTemporaryLink} from '../redux/saga/dropbox.ts';
import showSimpleToast from '../utils/showSimpleToast.ts';
import BackSvg from '../../assets/svg/fileHeader/BackSvg.tsx';

const ImageView = ({navigation, route}: FilesStackProps<'ImageView'>) => {
  const [uri, setUri] = useState<string>();
  const [load, setLoad] = useState<boolean>(true);

  const getLink = useCallback(async () => {
    try {
      setLoad(true);
      const data = await getTemporaryLink(route.params.path);
      setUri(data);
      setLoad(false);
    } catch (e) {
      if (__DEV__) console.log(e);
      showSimpleToast('Failed to get link');
      navigation.goBack();
    }
  }, [route.params]);

  useEffect(() => {
    getLink();
  }, [route.params]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <BackSvg width={24} height={24} />
      </TouchableOpacity>

      {load ? (
        <Loader />
      ) : (
        <Image
          style={styles.image}
          progressiveRenderingEnabled={true}
          source={{
            uri,
          }}
          resizeMode={'contain'}
        />
      )}
    </View>
  );
};

export default ImageView;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width - 32,
    height: width,
  },
  back: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 25,
    left: 25,
  },
});
