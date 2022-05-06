import { StyleSheet } from 'react-native';

import { Fonts, Color } from '../../themes';

export default StyleSheet.create({
  icon: (backgroundColor) => ({
    backgroundColor: backgroundColor
  }),
  iconContainer: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: 24,
  }),
  text: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.small_regular,
    color: Color.LightTheme.textDark,
    textAlign: 'center',
    marginTop: 8
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginTop: 9,
    borderRadius: 12,
    marginHorizontal: 2,
    width: '25%',
    paddingVertical: 12,
    alignItems: 'center'
  },
});
