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
    color: Color.brokenBlack,
    textAlign: 'center',
    marginTop: 4
  },
  container: {
    alignSelf: 'stretch',
    marginTop: 8,
    marginHorizontal: 4,
    paddingVertical: 12,
    alignItems: 'center'
  },
});
