import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './BalanceCard.styles';
import hooks from '../../hooks';

const { useSpring } = hooks;

const BalanceCard = (props) => {
  const { isScrolled } = props;
  const animation = useSpring({ to: isScrolled ? 1 : 0 }, { stiffness: 10 });
  const animatedContainerYValue = animation.interpolate({ inputRange: [0, 1], outputRange: [0, -600] });
  
  const renderBigBalanceCard = () => (
    <Animated.View style={styles.container(animatedContainerYValue)}>
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
    <View style={styles.smallContainer(animatedContainerYValue)}>
      <Animated.View style={styles.smallCard}>
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
      </Animated.View>
    </View>
  );
  
  return (
    <TouchableOpacity onPress={() => {}}>
      {isScrolled ? renderSmallBalanceCard() : renderBigBalanceCard()}
    </TouchableOpacity>
  );
}

export default BalanceCard;
