import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as widthPercentage,
  heightPercentageToDP as heightPercentage
} from 'react-native-responsive-screen';

import { Fonts, Color } from '../../themes';

const shadow = {
  shadowOffset: {
    width: 0,
    height: 0
  },
  shadowColor: Color.AppTheme.shadow,
  shadowOpacity: 0.5,
  shadowRadius: 6,
  elevation: 4
};

export default StyleSheet.create({
  text: {
    ...Fonts.style.normalMedium,
    color: Color.white
  },
  amountContainer: {
    flex: 1,
    height: '100%',
    marginVertical: 8,
    justifyContent: 'center'
  },
  amountText: {
    ...Fonts.style.h2Bold,
    marginTop: 8,
    color: Color.white,
    textAlign: 'center'
  },
  balanceText: {
    ...Fonts.style.normal,
    marginTop: 6,
    color: Color.white,
    textAlign: 'center'
  },
  balanceTrendText: {
    ...Fonts.style.smallerSemiBold,
    color: Color.white,
    textAlign: 'center'
  },
  container: {
    borderRadius: 28,
    height: 200,
    marginVertical: 12,
    marginHorizontal: 4,
    padding: 24,
    zIndex: 2,
    backgroundColor: Color.quaternary,
    ...shadow
  },
  smallContainer: (animatedValue, isScrolled) => ({
    paddingTop: 8,
    paddingBottom: 56,
    marginHorizontal: 4,
    transform: [{ translateY: animatedValue }]
  }),
  smallCard: {
    borderRadius: 28,
    marginTop: 12,
    height: 120,
    paddingHorizontal: 24,
    backgroundColor: Color.quaternary,
    ...shadow
  },
  amountSmallText: {
    ...Fonts.style.largeBold,
    marginTop: 6,
    color: Color.white
  },
  balanceSmallText: {
    ...Fonts.style.small,
    color: Color.white
  },
  balanceTrendSmallText: {
    position: 'absolute',
    ...Fonts.style.section,
    color: Color.white,
    right: 12,
    bottom: 12,
    textAlign: 'right'
  }
});
