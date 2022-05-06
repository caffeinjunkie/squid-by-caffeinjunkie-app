import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as heightPercentage
} from 'react-native-responsive-screen';

import { Fonts, Color } from '../../../themes';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingTop: heightPercentage(2),
    paddingBottom: heightPercentage(11)
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
