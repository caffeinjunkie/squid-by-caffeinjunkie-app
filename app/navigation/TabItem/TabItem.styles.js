import { StyleSheet } from 'react-native';

import { Fonts, Color } from '../../themes';

export default StyleSheet.create({
  icon: (focused) => ({
    color: focused ? Color.primary : Color.AppTheme.tabItem
  }),
  text: (focused) => ({
    fontFamily: focused ? Fonts.type.semiBold : Fonts.type.base,
    fontSize: Fonts.size.small,
    color: focused ? Color.primary : Color.AppTheme.tabItem,
    textAlign: 'center',
    marginTop: 6
  }),
  animation: (animation) => ({
    width: animation,
    height: animation
  }),
  container: (focused, fadeAnim) => ({
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 24,
    marginTop: 11,
    opacity: fadeAnim,
    marginHorizontal: 4,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: focused ? Color.transparentPrimaryPoint07 : Color.transparent
  }),
});
