import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as heightPercentage
} from 'react-native-responsive-screen';

import { Color, Fonts, Metrics } from '../../../themes';

const imageContainerSize = 36;

const shadow = {
  shadowOffset: {
    width: 0,
    height: 4
  },
  shadowColor: Color.AppTheme.shadow,
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 4
};


export default StyleSheet.create({
  container: (animatedValue) => ({
    flexDirection: 'row',
    paddingBottom: 8,
    marginHorizontal: -14,
    zIndex: 2,
    backgroundColor: Color.AppTheme.background,
    paddingTop: Metrics.navBarHeightWithoutStatusBar,
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
    marginBottom: 4
  },
  greetingsName: {
    ...Fonts.style.largeSemiBold,
    color: Color.AppTheme.textDark
  },
  nameContainer: (animatedValue, opacityValue) => ({
    position: 'absolute',
    backgroundColor: Color.AppTheme.background,
    zIndex: 1,
    height: heightPercentage(7),
    top: -56,
    opacity: opacityValue,
    marginHorizontal: -14,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    paddingBottom: heightPercentage(1.5),
    transform: [{ translateY: animatedValue }],
    ...shadow
  }),
  nameText: {
    ...Fonts.style.headerName,
    color: Color.AppTheme.textDark,
    paddingLeft: 8,
    alignSelf: 'center',
    textAlign: 'center',
    overflow: 'hidden'
  }
});
