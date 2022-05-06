import React from 'react';
import { View, Text, Animated } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import i18n from '../../util/locale/i18n';
import styles from './TabItem.styles';

const TabItem = (props) => {
  const {
    name,
    isFocused,
    iconName
  } = props;
  const scaleXAnimatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => Animated.timing(scaleXAnimatedValue, {
    toValue: 1,
    duration: 1000
  }).start(), [name]);

  const renderIcon = () => (
    <Icon
      name={iconName}
      size={24}
      style={styles.icon(isFocused)}
    />
  );

  const renderLine = () => (
    <Animated.View style={styles.selectedLine(scaleXAnimatedValue)} />
  );

  const renderText = () => (
    <Text style={styles.text(isFocused)}>
      {i18n.t(`${name}-title`)}
    </Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {renderIcon()}
      </View>
      {isFocused ? renderLine() : renderText()}
    </View>
  );
};

export default TabItem;
