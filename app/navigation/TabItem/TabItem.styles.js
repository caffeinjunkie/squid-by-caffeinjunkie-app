import { StyleSheet } from 'react-native';

import { Fonts, Color } from '../../themes';

export default StyleSheet.create({
  icon: (focused) => ({
    color: focused ? Color.primary : Color.LightTheme.text
  }),
  text: (focused) => ({
    fontFamily: focused ? Fonts.type.bold : Fonts.type.base,
    fontSize: Fonts.size.small,
    color: focused ? Color.primary : Color.LightTheme.text,
    textAlign: 'center',
    marginTop: 4
  }),
  animation: (animation) => ({
    width: animation,
    height: animation
  }),
  container: (focused, fadeAnim) => ({
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 24,
    marginTop: 8,
    opacity: fadeAnim,
    marginHorizontal: 4,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: focused ? Color.transparentPrimaryPoint07 : Color.transparent
  }),
});
