const type = {
  base: 'Gilroy-Regular',
  bold: 'Gilroy-Bold',
  semiBold: 'Gilroy-SemiBold',
  light: 'Gilroy-Light',
  medium: 'Gilroy-Medium'
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  h7: 16,
  h8: 13,
  h1_extra: 40,
  extraLarge: 28,
  large: 24,
  largeAmount: 23,
  largeInput: 21,
  input: 18,
  medium: 16,
  regular_medium: 15,
  regular: 14,
  small_regular: 13,
  small: 12,
  smaller: 11,
  small_extra: 10,
  tiny: 8.5
};

const style = {
  h1: {
    fontFamily: type.bold,
    fontSize: size.large
  },
  h3: {
    fontFamily: type.bold,
    fontSize: size.h3
  },
  h5: {
    fontFamily: type.bold,
    fontSize: size.h5
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  normalMedium: {
    fontFamily: type.medium,
    fontSize: size.regular
  },
  normalBold: {
    fontFamily: type.bold,
    fontSize: size.regular
  },
  normalSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.regular
  },
  button: {
    fontFamily: type.bold,
    fontSize: size.medium
  },
  subtitle: {
    fontFamily: type.base,
    fontSize: size.small
  },
  subtitleBold: {
    fontFamily: type.bold,
    fontSize: size.small
  },
  medium: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  mediumLight: {
    fontFamily: type.light,
    fontSize: size.medium
  },
  mediumRegular: {
    fontFamily: type.medium,
    fontSize: size.medium

  },
  mediumBold: {
    fontFamily: type.bold,
    fontSize: size.medium
  },
  mediumSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.medium
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small
  },
  smallBold: {
    fontFamily: type.bold,
    fontSize: size.small
  },
  smallLight: {
    fontFamily: type.light,
    fontSize: size.small
  },
  smaller: {
    fontFamily: type.light,
    fontSize: size.smaller
  },
  smallerSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.smaller
  },
  tinyBold: {
    fontFamily: type.bold,
    fontSize: size.tiny
  },
  regularBold: {
    fontFamily: type.bold,
    fontSize: size.regular
  },
  regularLight: {
    fontFamily: type.light,
    fontSize: size.regular
  },
  large: {
    fontFamily: type.light,
    fontSize: size.largeInput
  },
  largeBold: {
    fontFamily: type.bold,
    fontSize: size.largeInput
  },
  largeSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.largeInput
  },
  largeLight: {
    fontFamily: type.light,
    fontSize: size.largeInput
  },
  boldExtraLarge: {
    fontFamily: type.bold,
    fontSize: size.extraLarge
  },
  regularMedium: {
    fontFamily: type.base,
    fontSize: size.regular,
    fontWeight: '500'
  },
  regularMediumBold: {
    fontFamily: type.bold,
    fontSize: size.regular_medium
  },
  h2Bold: {
    fontFamily: type.bold,
    fontSize: size.h2
  },
  section: {
    fontFamily: type.bold,
    fontSize: size.input
  },
  headerName: {
    fontFamily: type.semiBold,
    fontSize: size.input
  }
};

export default {
  type,
  size,
  style
};
