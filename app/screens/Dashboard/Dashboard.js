import React from 'react';
import { View, Text } from 'react-native';

import { MenuIcon } from '../../components/MenuIcon';
import styles from './Dashboard.styles';
import config from './Dashboard.config';

const { SCREEN_NAME, MenuOptions } = config;

const Dashboard = () => (
  <View>
    <Text>tess</Text>
    <View style={styles.menuContainer}>
      {Object.keys(MenuOptions).map((key) => (
        <MenuIcon
          screenName={SCREEN_NAME}
          {...MenuOptions[key]}
        />
      ))}
    </View>
  </View>
);

export default Dashboard;
