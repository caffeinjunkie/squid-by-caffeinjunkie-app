import { StyleSheet } from 'react-native';

import { Fonts, Color } from '../../../themes';

export default StyleSheet.create({
  icon: (backgroundColor) => ({
    backgroundColor
  }),
  iconContainer: (backgroundColor) => ({
    backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 78,
    borderRadius: 20
  }),
  text: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.small_regular,
    color: Color.AppTheme.textDark,
    textAlign: 'center',
    marginTop: 8
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginTop: 9,
    borderRadius: 12,
    marginHorizontal: 6,
    width: '25%',
    paddingTop: 8,
    paddingBottom: 12,
    alignItems: 'center'
  }
});
