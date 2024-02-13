import Toast from 'react-native-simple-toast';

export default function (message: string) {
  Toast.showWithGravity(message, Toast.LONG, Toast.TOP);
}
