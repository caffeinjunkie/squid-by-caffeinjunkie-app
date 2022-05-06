import { StyleSheet } from 'react-native';

import { Fonts, Color, Metrics } from '../../themes';

export default StyleSheet.create({
  icon: (focused) => ({
    color: focused ? Color.primary : Color.AppTheme.tabItem
  }),
  iconContainer: {
    marginBottom: 6
  },
  text: (focused) => ({
    fontFamily: focused ? Fonts.type.semiBold : Fonts.type.base,
    fontSize: Fonts.size.small,
    color: focused ? Color.primary : Color.AppTheme.tabItem,
    textAlign: 'center'
  }),
  selectedLine: (animatedValue) => ({
    height: 4,
    marginVertical: 4,
    width: 12,
    borderRadius: 2,
    backgroundColor: Color.primary,
    transform: [{ scaleX: animatedValue }]
  }),
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 24,
    marginTop: Metrics.bottomBarMarginTop,
    marginHorizontal: 4,
    paddingVertical: 12,
    alignItems: 'center'
  }
});
