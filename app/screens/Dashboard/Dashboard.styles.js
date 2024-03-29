import { StyleSheet } from 'react-native';

import constants from '../../constants';
import { Color } from '../../themes';

const { DefaultPadding } = constants;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DefaultPadding,
    backgroundColor: Color.AppTheme.background
  }
});
