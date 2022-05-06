import { StyleSheet } from 'react-native';

import { Fonts, Color } from '../../../themes';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingTop: 8,
    paddingBottom: 100
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14
  },
  text: {
    ...Fonts.style.section,
    color: Color.AppTheme.textDark
  },
  buttonText: {
    ...Fonts.style.normalSemiBold,
    color: Color.primary
  }
});
