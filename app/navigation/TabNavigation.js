import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './TabNavigation.styles';
import { TabIcon } from './TabIcon';
import config from './TabNavigation.config';

const { TabIconOptions } = config;

const Tab = createBottomTabNavigator();

const renderTabIcon = (key) => (
  <Tab.Screen
    key={key}
    name={TabIconOptions[key].name}
    component={TabIconOptions[key].component}
    options={getTabIconOptions(TabIconOptions[key])}
  />
);

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      {Object.keys(TabIconOptions).map((key) => renderTabIcon(key))}
    </Tab.Navigator>
  );
};

const getTabIconOptions = (options) => ({
  tabBarIcon: ({ focused }) => (
    <TabIcon name={options.name} iconName={options.icon} focused={focused}/>
  )
});

const tabBarOptions = {
  showLabel: false,
  style: styles.container
}

export default TabNavigation;
