import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ButtonToggleEventHandler = () => {
  const positonX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, value) => {
      value.startX = positonX.value;
    },
    onActive: (event, value) => {
      const newX = value.startX + event.translationX;
      const minX = 0;
      const maxX = 64;
      positonX.value = Math.max(minX, Math.min(newX, maxX));
    },
    onEnd: () => {
      const minX = 0;
      const maxX = 64;
      if (positonX.value > 30) {
        positonX.value = withSequence(
          withTiming(maxX, {duration: 200}),
          withSpring(maxX, {damping: 5, stiffness: 100}),
        );
      } else {
        positonX.value = withSequence(
          withTiming(minX, {duration: 200}),
          withSpring(minX, {damping: 5, stiffness: 100}),
        );
      }
    },
  });

  const useAnimationStyleToggle = useAnimatedStyle(() => {
    return {transform: [{translateX: positonX.value}]};
  });

  const useAnimationStyleContainer = useAnimatedStyle(() => {
    const backgroundColorValue = interpolateColor(
      positonX.value,
      [0, 64],
      ['white', 'black'],
    );
    return {backgroundColor: withTiming(backgroundColorValue, {duration: 200})};
  });

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <Animated.View style={[styles.container, useAnimationStyleContainer]}>
        <View style={[styles.containerButton]}>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={useAnimationStyleToggle}>
              <TouchableOpacity style={styles.button}></TouchableOpacity>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    width: 100,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: 'green',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'grey',
    borderRadius: 100,
  },
});

export default ButtonToggleEventHandler;
