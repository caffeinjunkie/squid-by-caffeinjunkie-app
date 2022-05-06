import React from 'react';
import {
  View, Text, TouchableOpacity, Animated
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './BalanceCard.styles';
import hooks from '../../hooks';

const { useSpring } = hooks;

const BalanceCard = (props) => {
  const { isScrolled } = props;
  const firstAnimation = useSpring({ to: isScrolled ? 1 : 0 }, { stiffness: 10 });
  const secondAnimation = useSpring({ to: isScrolled ? 1 : 0 }, { stiffness: 25 });
  // const animatedBigYValue = firstAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, -600] });
  const animatedSmallYValue = secondAnimation.interpolate({ inputRange: [0, 1], outputRange: [-500, 72] });

  const renderBigBalanceCard = () => (
    <Animated.View style={styles.container}>
      <Text style={styles.text}>SAVINGS</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Rp 12,200,800,000</Text>
        <Text style={styles.balanceText}>Current Balance</Text>
      </View>
      <Text style={styles.balanceTrendText}>
        <Icon
          name="trending-down"
          size={11}
          color="#ffffff"
        />
        {' '}
        Your balance is 24% lower than last month
      </Text>
    </Animated.View>
  );

  const renderSmallBalanceCard = () => (
    <Animated.View style={styles.smallContainer(animatedSmallYValue, isScrolled)}>
      <View style={styles.smallCard}>
        <View style={styles.amountContainer}>
          <Text style={styles.balanceSmallText}>Balance</Text>
          <Text style={styles.amountSmallText}>Rp 12,200,800,000</Text>
        </View>
        <Text style={styles.balanceTrendSmallText}>
          <Icon
            name="trending-down"
            size={18}
            color="#ffffff"
          />
          {' '}
          24%
        </Text>
      </View>
    </Animated.View>
  );

  return (
    <TouchableOpacity onPress={() => {}}>
      {renderBigBalanceCard()}
      {/*{renderSmallBalanceCard()}*/}
    </TouchableOpacity>
  );
};

export default BalanceCard;
