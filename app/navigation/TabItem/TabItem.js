import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import i18n from '../../util/locale/i18n';
import styles from './TabItem.styles';

const TabItem = (props) => {
  const {
    name,
    isFocused,
    iconName
  } = props;
  
  const renderIcon = () => (
    <Text>
      <Icon
        name={iconName}
        size={24}
        style={styles.icon(isFocused)}
      />
    </Text>
  );
  
  return (
    <View style={styles.container(isFocused)}>
      <View>
        {renderIcon()}
      </View>
      <Text style={styles.text(isFocused)}>
        {i18n.t(`${name}-title`)}
      </Text>
    </View>
  );
}

export default TabItem;
