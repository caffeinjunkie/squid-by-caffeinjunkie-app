import { StyleSheet } from 'react-native';
import {Color} from "../themes";

export default StyleSheet.create({
  container: {
    position: 'absolute',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: 104,
    paddingHorizontal: 4,
    backgroundColor: Color.white,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowColor: Color.black66opacity,
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 4
  }
});
