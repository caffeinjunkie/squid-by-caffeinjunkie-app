import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as heightPercentage
} from 'react-native-responsive-screen';

import { Color, Metrics } from '../themes';

const shadow = {
  shadowOffset: {
    width: 0,
    height: 0
  },
  shadowColor: Color.AppTheme.shadow,
  shadowOpacity: 0.2,
  shadowRadius: 10,
  elevation: 4
};

export default StyleSheet.create({
  container: {
    position: 'absolute',
    borderTopLeftRadius: Metrics.bottomBarBorderRadius,
    borderTopRightRadius: Metrics.bottomBarBorderRadius,
    borderTopWidth: 0,
    height: heightPercentage(11),
    paddingHorizontal: 4,
    backgroundColor: Color.AppTheme.background,
    ...shadow
  }
});
