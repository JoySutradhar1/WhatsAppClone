import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CallLink from '../components/CallLink';
import RecentCalls from '../components/RecentCalls';
import {Colors} from '../theme/Colors';

const CallListScreen = () => {
  return (
    <View style={styles.container}>
      <CallLink />
      <RecentCalls />
    </View>
  );
};

export default CallListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.background,
    gap: 20,
  },
});
