import React from 'react';
import { View } from 'react-native';

import styles from './Menu.component.styles';
import { MenuItem } from '../MenuItem';
import config from './Menu.config';

const { MenuOptions } = config;

const Menu = (props) => {
  const { screenName } = props;
  return (
    <View style={styles.container}>
      {Object.keys(MenuOptions).map((key) => (
        <MenuItem
          key={key}
          screenName={screenName}
          {...MenuOptions[key]}
        />
      ))}
    </View>
  );
};

export default Menu;
