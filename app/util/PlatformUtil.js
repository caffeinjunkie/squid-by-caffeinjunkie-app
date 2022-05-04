import { Platform, Dimensions } from 'react-native';

import Constants from '../constants';

const { Platforms } = Constants;

export const isAndroid = () => Platform.OS === Platforms.android;
export const isIOS = () => Platform.OS === Platforms.ios;

const getRatio = () => {
  const { height, width } = Dimensions.get('window');

  let ratio = height / width;
  if (width > height) {
    ratio = width / height;
  }

  return ratio;
};

export const isIphoneX = () => isIOS() && getRatio() >= 2.0;
export const isAndroidHighRatio = () => isAndroid() && getRatio() >= 1.9;

export default {
  isAndroid,
  isIOS,
  isIphoneX,
  isAndroidHighRatio
};
