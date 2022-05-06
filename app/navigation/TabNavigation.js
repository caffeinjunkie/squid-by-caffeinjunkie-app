import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';
import { mix } from 'react-native-redash';
import Svg, {
  Defs,
  LinearGradient,
  Mask,
  Path,
  Rect,
  Stop
} from 'react-native-svg';

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
};

const getTabItemOptions = (options) => ({
  tabBarIcon: ({ focused }) => (
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
};

export default TabNavigation;
