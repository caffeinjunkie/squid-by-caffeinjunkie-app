import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import styles from './Dashboard.styles';
import config from './Dashboard.config';
import { Menu } from './Menu';
import { Header } from './Header';
import { BalanceCard } from '../../components/BalanceCard';
import { RecentTransactions } from './RecentTransactions';
import { NoCard } from './NoCard';

const { SCREEN_NAME } = config;

const Dashboard = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const hasCards = false;

  return (
    <ScrollView
      pagingEnabled
      showsVerticalScrollIndicator={false}
      style={styles.container}
      onMomentumScrollEnd={(event) => setIsScrolled(event.nativeEvent.contentOffset.y !== 0)}
    >
      <Header isScrolled={isScrolled} hasCards={hasCards}/>
      {hasCards ? <BalanceCard isScrolled={isScrolled} /> : <NoCard isScrolled={isScrolled} />}
      <Menu screenName={SCREEN_NAME} />
      <RecentTransactions />
    </ScrollView>
  );
};

export default Dashboard;
