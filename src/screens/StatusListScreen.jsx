import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MyStatus from '../components/MyStatus';
import RecentStatus from '../components/RecentStatus';
import ViewedStatus from '../components/ViewedStatus';
import {Colors} from '../theme/Colors';

const StatusListScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <MyStatus />
      <RecentStatus />
      <ViewedStatus />
    </ScrollView>
  );
};

export default StatusListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
});
