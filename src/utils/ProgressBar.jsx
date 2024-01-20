import {View, Text, Animated, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Colors} from '../theme/Colors';

const ProgressBar = ({setTimeUp}) => {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  const animateProgress = () => {
    Animated.timing(progressAnimation, {
      toValue: 100,
      duration: 10000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        setTimeUp();
        console.log('Animation stopped and progressbar is full');
      }
    });
  };
  useEffect(() => {
    animateProgress();
  }, []);
  return (
    <View style={{marginTop: 10}}>
      <Animated.View
        style={[
          styles.progress,
          {
            width: progressAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progress: {
    width: '100%',
    height: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
});
