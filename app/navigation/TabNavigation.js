import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../screens/dashboard';
import { Ngens } from '../screens/blank';
import styles from './TabNavigation.styles';
import { TabIcon } from './TabIcon';
import config from './TabNavigation.config';

const { TabIconOptions } = config;

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name={TabIconOptions.DASHBOARD.name}
        component={Dashboard}
        options={getTabIconOptions(TabIconOptions.DASHBOARD)}
      />
      <Tab.Screen
        name={TabIconOptions.ANALYTICS.name}
        component={Ngens}
        options={getTabIconOptions(TabIconOptions.ANALYTICS)}
      />
      <Tab.Screen
        name={TabIconOptions.BUDGET.name}
        component={Ngens}
        options={getTabIconOptions(TabIconOptions.BUDGET
        )}
      />
      <Tab.Screen
        name={TabIconOptions.PROFILE.name}
        component={Ngens}
        options={getTabIconOptions(TabIconOptions.PROFILE)}
      />
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
