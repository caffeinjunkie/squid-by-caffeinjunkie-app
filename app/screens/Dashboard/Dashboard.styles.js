import { StyleSheet } from 'react-native';

import constants from '../../constants';

const { DefaultPadding } = constants;

export default StyleSheet.create({
  menuContainer: {
    paddingHorizontal: DefaultPadding,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
