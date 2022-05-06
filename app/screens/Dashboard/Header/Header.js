import React from 'react';
import {Text, View, Animated} from 'react-native';

import styles from './Header.component.styles';
import hooks from '../../../hooks';

const { useSpring } = hooks;

const Header = (props) => {
  const { isScrolled } = props;
  const animation = useSpring({ to: isScrolled ? 1 : 0 }, { stiffness: 50 });
  const animatedContainerYValue = animation.interpolate({ inputRange: [0, 1], outputRange: [0, 130] });
  const animatedGreetingsYValue = animation.interpolate({ inputRange: [0, 1], outputRange: [0, 80] });
  const animatedNameYValue = animation.interpolate({ inputRange: [0, 1], outputRange: [-40, 0] });
  const animatedImageSizeValue = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.75] });
  
  const renderGreetings = () => (
    <Animated.View style={styles.greetingsContainer(animatedGreetingsYValue)}>
      <Text style={styles.greetingsText}>Good Morning,</Text>
      <Text style={styles.greetingsName}>Patrick Bateman</Text>
    </Animated.View>
  );
  
  const renderName = () => (
    <Animated.Text style={styles.nameText(animatedNameYValue)}>Patrick Bateman</Animated.Text>
  );
  
  return (
    <Animated.View style={[styles.container(animatedContainerYValue)]}>
      <Animated.View style={styles.imageContainer(animatedImageSizeValue)} />
      {isScrolled ? renderName() : renderGreetings()}
    </Animated.View>
  );
}

export default Header;
