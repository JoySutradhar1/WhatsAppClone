import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

import {Colors} from '../theme/Colors';
import {RecentStatusData} from '../data/RecentStatusData';

const RecentStatus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.recentUpdates}>Recent Updates</Text>
      {RecentStatusData.map(item => (
        <>
          <View style={styles.storySection}>
            <View style={styles.imageStory}>
              <Image source={item.storyImg} style={styles.statusStyle} />
            </View>
            <View>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        </>
      ))}
    </View>
  );
};

export default RecentStatus;
const styles = StyleSheet.create({
  recentUpdates: {
    color: Colors.textGrey,
    fontSize: 14,
    paddingBottom: 10,
    paddingTop: 20,
  },
  statusStyle: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  imageStory: {
    height: 50,
    width: 50,
    borderColor: Colors.tertiary,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.white,
  },
  time: {
    fontSize: 13,
    color: Colors.textGrey,
  },

  storySection: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
});
