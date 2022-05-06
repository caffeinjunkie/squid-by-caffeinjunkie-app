import React from 'react';
import { Text, Animated } from 'react-native';

import styles from './Header.component.styles';
import hooks from '../../../hooks';

const { useSpring } = hooks;

const HeaderComponent = (props) => {
  const { isScrolled, hasCards } = props;
  
  const animation = useSpring({ to: isScrolled ? 1 : 0 }, { stiffness: 20 });
  const animatedContainerYValue = animation
    .interpolate({ inputRange: [0, 1], outputRange: [-5, -100] });
  const animatedSmallContainerYValue = animation
  .interpolate({ inputRange: [0, 1], outputRange: [0, hasCards ? 172 : 148] });
  const animatedGreetingsYValue = animation
    .interpolate({ inputRange: [0, 1], outputRange: [0, -80] });
  const animatedNameOpacityValue = animation
    .interpolate({ inputRange: [0, 0.5, 0.7, 1], outputRange: [0, 0.5, 0.7, 1] });
  const animatedImageSizeValue = animation
    .interpolate({ inputRange: [0, 1], outputRange: [1, 0.75] });

  const renderGreetings = () => (
    <Animated.View style={styles.container(animatedContainerYValue)}>
      <Animated.View style={styles.imageContainer(animatedImageSizeValue)} />
      <Animated.View style={styles.greetingsContainer(animatedGreetingsYValue)}>
        <Text style={styles.greetingsText}>Good Morning,</Text>
        <Text style={styles.greetingsName}>Patrick Bateman</Text>
      </Animated.View>
    </Animated.View>
  );

  const renderName = () => (
    <Animated.View style={styles.nameContainer(animatedSmallContainerYValue, animatedNameOpacityValue)}>
      <Animated.Text style={styles.nameText}>Patrick Bateman</Animated.Text>
    </Animated.View>
  );

  return (
    <>
      {renderGreetings()}
      {renderName()}
    </>
  );
};

export default HeaderComponent;
