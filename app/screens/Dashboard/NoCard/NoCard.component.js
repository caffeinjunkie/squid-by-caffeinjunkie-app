import React from 'react';
import {
  Text, TouchableOpacity, Animated
} from 'react-native';

import styles from './NoCard.styles';
import hooks from '../../../hooks';
import { Metrics } from '../../../themes';

const { useSpring } = hooks;

const NoCard = (props) => {
  const { isScrolled } = props;
  const noCardYValue = Metrics.screenHeight * 3.8/100;
  const animation = useSpring({ to: isScrolled ? 1 : 0 }, { stiffness: 50 });
  const animationConfig = { inputRange: [0, 1], outputRange: [0, noCardYValue] };
  const animatedContainerYValue = animation.interpolate(animationConfig);

  return (
    <Animated.View style={styles.container(animatedContainerYValue)}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.text}>
          Add Card
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default NoCard;
