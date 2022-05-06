import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { MenuProvider } from 'react-native-popup-menu';

import constants from './constants';
import TabNavigation from './navigation/TabNavigation';
import I18n from './util/locale/i18n';
import { Color, Fonts } from './themes';

const { Language: { ID } } = constants;

const customTextProps = {
  style: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.base,
    color: Color.black
  },
  allowFontScaling: false
};
const customTextInputProps = {
  style: {
    fontFamily: Fonts.type.base
  },
  allowFontScaling: false
};

console.disableYellowBox = true;

setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);

I18n.locale = ID.language;

const App = () => (
  <MenuProvider customStyles={menuContext}>
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  </MenuProvider>
);

const menuContext = {
  backdrop: {
    backgroundColor: Color.black,
    opacity: 0.6
  }
};
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });

export default App;
