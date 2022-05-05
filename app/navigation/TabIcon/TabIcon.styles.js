import { StyleSheet } from 'react-native';

import { Fonts, Color } from '../../themes';

export default StyleSheet.create({
  icon: (focused) => ({
    color: focused ? Color.primary : Color.brokenBlack
  }),
  text: (focused) => ({
    fontFamily: focused ? Fonts.type.bold : Fonts.type.base,
    fontSize: Fonts.size.small,
    color: focused ? Color.primary : Color.brokenBlack,
    textAlign: 'center',
    marginTop: 4
  }),
  container: (focused) => ({
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 24,
    marginTop: 8,
    marginHorizontal: 4,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: focused ? Color.transparentPrimaryPoint07 : Color.transparent
  }),
});
