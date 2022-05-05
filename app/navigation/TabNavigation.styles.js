import { StyleSheet } from 'react-native';

import { Color } from '../themes';

const shadow = {
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowColor: Color.black66opacity,
  shadowOpacity: 0.2,
  shadowRadius: 10,
  elevation: 4
}

export default StyleSheet.create({
  container: {
    position: 'absolute',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: 104,
    paddingHorizontal: 4,
    backgroundColor: Color.white,
    ...shadow
  }
});
