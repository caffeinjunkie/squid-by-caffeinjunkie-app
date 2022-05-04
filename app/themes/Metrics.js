import { Dimensions, Platform, StatusBar } from 'react-native';

import utils from '../util';

const { isIphoneX } = utils;
const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const breakpoints = {
  extraSmall: 360,
  small: 414,
  medium: 630,
  large: 960,
  extraLarge: 1024,
  iphone5: 320
};

const heightBreakPoints = {
  small: 640,
  medium: 720
};

const isExtraSmallDevice = screenWidth < breakpoints.extraSmall;
const isExtraSmallMobileDevice = screenWidth < breakpoints.extraSmall;
const isSmallHeightMobileDevice = screenHeight < heightBreakPoints.small;
const isMediumMobileDevice = screenWidth > breakpoints.medium;
const isLargeMobileDevice = screenWidth > breakpoints.large;
const isExtraSmallScreen = screenWidth <= breakpoints.extraSmall;
const isIphone5 = screenWidth <= breakpoints.iphone5;

const Metrics = {
  offset: {
    extremeSmall: 4,
    extraSmall: 8,
    small: 16,
    medium: 32,
    large: 44,
    extremeLarge: 74,
    introWidgetItem: 255
  },
  mobile: {
    blueBorderWidth: 2
  },
  zIndex: {
    // Manage zIndexes here
    rootLoadingMask: 5
  },
  lineHeight: {
    title: 30
  },
  height: {
    small: 15,
    smallToMedium: 28,
    medium: 35,
    large: 50,
    largeToExtra: 120,
    extraLarge: 130
  },
  width: {
    small: 18,
    medium: 80,
    mediumToLarge: 95,
    large: 215,
    extraLarge: 380
  },
  activateButtonHeight: 35,
  marginHorizontal: 10,
  marginVertical: 10,
  marginMedium: 24,
  marginMediumLarge: 35,
  marginLarge: 40,
  marginExtraLarge: 60,
  paddingBase: 10,
  paddingMedium: 20,
  paddingMediumLarge: 35,
  section: 25,
  baseMargin: 10,
  mediumBaseMargin: 15,
  doubleBaseMargin: 20,
  smallMargin: 5,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth,
  screenHeight,
  smallWidth: 100,
  mediumWidth: 250,
  contactLowerMargin: Platform.select({
    ios: 2,
    android: 2
  }),
  navBarHeight: Platform.select({
    ios: (isIphoneX && isIphoneX()) ? 90 : 78,
    android: 80
  }),
  statusBarHeight: Platform.select({
    ios: (isIphoneX && isIphoneX()) ? 78 : 58,
    android: StatusBar.currentHeight + 40
  }),
  navBarHeightWithoutStatusBar: Platform.select({
    ios: (isIphoneX && isIphoneX()) ? 62 : 50,
    android: 80
  }),
  buttonRadius: 4,
  tutorialRadius: 5,
  icons: {
    supertiny: 13,
    tiny: 15,
    small: 20,
    medium: 30,
    mediumLarge: 36,
    large: 45,
    xl: 60
  },
  images: {
    small: 24,
    medium: 40,
    large: 54,
    logo: 300
  },
  designMobile: {
    width: 360,
    height: 640
  },
  mobileForm: {
    paddingTop: 48,
    paddingLeft: 32,
    paddingRight: 32,
    marginVertical: 13,
    marginHorizontal: 24,
    paddingBottom: 32,
    buttonMarginTop: 60
  },
  formContainer: {
    paddingTop: 32.5
  },
  slider: {
    thumb: {
      width: 20,
      height: 20,
      borderRadius: 15,
      borderWidth: 1.5
    },
    track: {
      height: 2,
      borderRadius: 2
    }
  },
  iPhoneX: {
    bottomSpace: 20
  },
  heightHeader:
    Platform.select({
      ios: 78,
      android: 165
    }),
  modalMargin: isExtraSmallMobileDevice ? 20 : 30,
  arrow: 12.5,
  shimmeringWidth: {
    large: 170,
    medium: 110
  },
  // Single Screen-Sizes
  screenLarge: `@media (min-width: ${breakpoints.large}px)`,
  screenMedium: `@media (max-width: ${breakpoints.large - 1}px) and (min-width: ${breakpoints.medium}px)`,
  screenSmall: `@media (max-width: ${breakpoints.medium - 1}px) and (min-width: ${breakpoints.small}px)`,
  screenExtraSmall: `@media (max-width: ${breakpoints.small - 1}px)`,
  // Ranges of Sizes
  screenSmMdLgXL: `@media (max-width: ${breakpoints.extraLarge}px)`,
  screenMdLg: `@media (min-width: ${breakpoints.medium}px)`, // screenLarge + screenMedium
  screenXsSm: `@media (max-width: ${breakpoints.medium - 1}px)`, // screenSmall + screenExtraSmall
  screenXsSmMd: `@media (max-width: ${breakpoints.large - 1}px)`,
  screenSmMd: `@media (max-width: ${breakpoints.large - 1}px) and (min-width: ${breakpoints.small}px)`,
  screenSmMdLg: `@media (min-width: ${breakpoints.small}px)`,
  screenXs: `@media (max-width: ${breakpoints.extraSmall - 1}px)`,
  iphone5: `@media (max-width: ${breakpoints.iphone5}px)`,
  breakpoints,
  isExtraSmallDevice,
  isExtraSmallMobileDevice,
  isSmallHeightMobileDevice,
  isLargeMobileDevice,
  isMediumMobileDevice,
  isExtraSmallScreen,
  isIphone5,
  Platform
};

export default Metrics;
