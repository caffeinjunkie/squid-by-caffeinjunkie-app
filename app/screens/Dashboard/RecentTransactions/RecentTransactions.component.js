import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './RecentTransactions.styles';
import { TransactionItem } from '../../../components/TransactionItem';

const RecentTransactions = (props) => {
  const { transactions } = props;

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.text}>Recent Transactions</Text>
      <TouchableOpacity>
        <Text style={styles.buttonText}>
          See All
        </Text>
      </TouchableOpacity>
    </View>

  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {transactions.map((transaction) => <TransactionItem key={transaction.id} transaction={transaction} />)}
    </View>
  );
};

export default RecentTransactions;
