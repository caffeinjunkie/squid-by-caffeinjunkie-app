import React from 'react';
import {
  View, Text, TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import styles from './TransactionItem.styles';

const TransactionItem = (props) => {
  const { transaction } = props;
  const { icon, description, amount, date, type } = transaction;
  
  const renderIcon = () => (
    <View style={styles.imageContainer(icon.backgroundColor)}>
      <Icon
        name={icon.name}
        size={24}
        color={icon.color}
      />
    </View>
  );

  const renderInfo = () => (
    <View style={styles.infoContainer}>
      <Text
        numberOfLines={2}
        style={styles.descriptionText}
      >
        {description}
      </Text>
      <Text style={styles.timeText}>{date}</Text>
    </View>
  );

  const renderAmount = () => (
    <Text
      adjustsFontSizeToFit
      numberOfLines={1}
      style={styles.amountText(type)}
    >
      {amount}
    </Text>
  );

  return (
    <TouchableOpacity style={styles.container}>
      {renderIcon()}
      {renderInfo()}
      {renderAmount()}
    </TouchableOpacity>
  );
};

export default TransactionItem;
