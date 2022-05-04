import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import i18n from '../../util/locale/i18n';
import styles from './TabIcon.styles';

const TabIcon = (props) => {
  const { name, focused, iconName } = props;
  return (
    <View style={styles.container(focused)}>
      <Text>
        <Icon name={iconName} size={24} style={styles.icon(focused)} />
      </Text>
      <Text style={styles.text(focused)}>
        {i18n.t(`${name}-title`)}
      </Text>
    </View>
  );
}

export default TabIcon;
