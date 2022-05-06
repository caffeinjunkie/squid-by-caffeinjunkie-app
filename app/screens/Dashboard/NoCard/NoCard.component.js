import React from 'react';
import { View, Text, TouchableOpacity, Animated} from 'react-native';

import styles from './NoCard.styles';
import hooks from '../../../hooks';

const { useSpring } = hooks;

const NoCard = (props) => {
  const { isScrolled } = props;
  const animation = useSpring({ to: isScrolled ? 1 : 0 }, { stiffness: 50 });
  const animatedContainerYValue = animation.interpolate({ inputRange: [0, 1], outputRange: [0, 36] });
  
  return (
    <Animated.View style={styles.container(animatedContainerYValue)}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.text}>
          Add Card
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default NoCard;
