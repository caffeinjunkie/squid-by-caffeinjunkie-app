import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import i18n from '../../../util/locale/i18n';
import styles from './MenuItem.styles';

const MenuItem = (props) => {
  const {
    screenName,
    name,
    iconName,
    color,
    backgroundColor
  } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <View style={styles.iconContainer(backgroundColor)}>
        <Icon
          name={iconName}
          size={26}
          color={color}
        />
      </View>
      <Text style={styles.text}>
        {i18n.t(`${screenName}-${name}-text`)}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
