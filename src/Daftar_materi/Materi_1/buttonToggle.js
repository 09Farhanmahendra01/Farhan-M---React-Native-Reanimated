import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Materi_1_1 = () => {
  const [currenLeft, setCurrentLeft] = useState(true);
  const animation = useSharedValue(0);

  const animatiomStyleButton = useAnimatedStyle(() => {
    return {transform: [{translateX: animation.value}]};
  });

  const animationStyleContainer = useAnimatedStyle(() => {
    const valueBackgroundColor = interpolateColor(
      animation.value,
      [0, 66],
      ['white', 'black'],
    );
    return {backgroundColor: withTiming(valueBackgroundColor, {duration: 150})};
  });

  const animationStyleContainerButton = useAnimatedStyle(() => {
    const valueBackgroundColor = interpolateColor(
      animation.value,
      [0, 66],
      ['white', 'black'],
    );
    return {backgroundColor: withTiming(valueBackgroundColor, {duration: 150})};
  });

  return (
    <Animated.View style={[styles.container, animationStyleContainer]}>
      <Animated.View
        style={[styles.containerToogle, animationStyleContainerButton]}>
        <TouchableOpacity
          onPress={() => {
            if (currenLeft) {
              animation.value = withTiming(66, {duration: 150});
            } else {
              animation.value = withTiming(0, {duration: 150});
            }
            setCurrentLeft(!currenLeft);
          }}>
          <Animated.View
            style={[styles.circle, animatiomStyleButton]}></Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerToogle: {
    width: 100,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'green',
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: 'grey',
    borderRadius: 100,
  },
});
export default Materi_1_1;
