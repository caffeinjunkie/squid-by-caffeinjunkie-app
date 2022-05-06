import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './TabNavigation.styles';
import { TabItem } from './TabItem';
import config from './TabNavigation.config';

const { TabItemOptions } = config;

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const renderTabItem = (key) => (
    <Tab.Screen
      key={key}
      name={TabItemOptions[key].name}
      component={TabItemOptions[key].component}
      options={getTabItemOptions(TabItemOptions[key])}
    />
  );
  
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      {Object.keys(TabItemOptions).map(renderTabItem)}
    </Tab.Navigator>
  );
}

const getTabItemOptions = (options) => ({
  tabBarIcon: ({focused}) => (
    <TabItem
      name={options.name}
      iconName={options.icon}
      isFocused={focused}
    />
  )
});

const tabBarOptions = {
  showLabel: false,
  style: styles.container
}

export default TabNavigation;
