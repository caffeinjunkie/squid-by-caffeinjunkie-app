import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './TransactionItem.styles';

const TransactionItem = () => {
  const renderIcon = () => (
    <View style={styles.imageContainer} />
  );
  
  const renderInfo = () => (
    <View style={styles.infoContainer}>
      <Text
        numberOfLines={2}
        style={styles.descriptionText}
      >
        Beli Kondom
      </Text>
      <Text style={styles.timeText}>10 Oct, 10:00 AM</Text>
    </View>
  );
  
  const renderAmount = () => (
    <Text
      adjustsFontSizeToFit
      numberOfLines={1}
      style={styles.amountText}
    >
      -Rp 69,000
    </Text>
  );
  
  return (
    <TouchableOpacity style={styles.container}>
      {renderIcon()}
      {renderInfo()}
      {renderAmount()}
    </TouchableOpacity>
  )
};

export default TransactionItem;
