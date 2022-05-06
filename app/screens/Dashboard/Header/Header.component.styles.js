import { StyleSheet } from 'react-native';

import { Color, Fonts } from '../../../themes';
import { isIphoneX } from '../../../util/PlatformUtil';

const imageContainerSize = 36;

export default StyleSheet.create({
  container: (animatedValue) => ({
    flexDirection: 'row',
    paddingBottom: 8,
    backgroundColor: Color.AppTheme.background,
    marginHorizontal: -14,
    zIndex: 2,
    paddingTop: isIphoneX ? 64 : 48,
    paddingHorizontal: 18,
    transform: [{ translateY: animatedValue }]
  }),
  imageContainer: (animatedValue) => ({
    height: imageContainerSize,
    width: imageContainerSize,
    alignSelf: 'center',
    borderRadius: imageContainerSize / 2,
    backgroundColor: Color.grayContainer,
    transform: [{
      scale: animatedValue
    }]
  }),
  greetingsContainer: (animatedValue) => ({
    paddingLeft: 12,
    transform: [{ translateY: animatedValue }],
    overflow: 'hidden'
  }),
  greetingsText: {
    ...Fonts.style.normalMedium,
    color: Color.AppTheme.textLight,
    marginBottom: 4,
  },
  greetingsName: {
    ...Fonts.style.largeSemiBold,
    color: Color.AppTheme.textDark
  },
  nameText: (animatedValue) => ({
    ...Fonts.style.headerName,
    color: Color.AppTheme.textDark,
    paddingLeft: 8,
    alignSelf: 'center',
    overflow: 'hidden',
    transform: [{ translateY: animatedValue }],
  })
});
