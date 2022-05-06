import { StyleSheet } from 'react-native';

import { Fonts, Color } from '../../../themes';

export default StyleSheet.create({
  text: {
    ...Fonts.style.normalBold,
    color: Color.AppTheme.textLight,
    textAlign: 'center',
    marginTop: 2
  },
  button: {
    height: 40,
    width: 96,
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: Color.AppTheme.textLight,
    borderWidth: 1.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: (animatedValue) => ({
    height: 200,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: animatedValue }]
  }),
});
