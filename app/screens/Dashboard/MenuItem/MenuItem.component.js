import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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
        <Text>
          <Icon
            name={iconName}
            size={26}
            color={color}
          />
        </Text>
      </View>
      <Text style={styles.text}>
        {i18n.t(`${screenName}-${name}-text`)}
      </Text>
    </TouchableOpacity>
  );
}

export default MenuItem;
