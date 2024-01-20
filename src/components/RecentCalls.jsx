import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import img from '../assets/p1.jpg';
import VectorIcon from '../utils/VectorIcon';

const RecentCalls = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.recentText}>Recent</Text>
      <View style={styles.callContainer}>
        <View style={{flexDirection: 'row', gap: 12}}>
          <Image source={img} style={styles.profileImg} />
          <View>
            <Text style={styles.userName}>Name</Text>
            <View style={{flexDirection: 'row', gap: 6}}>
              <VectorIcon
                type="MaterialCommunityIcons"
                name="arrow-top-right"
                color={Colors.tertiary}
                size={18}
              />
              <VectorIcon
                type="MaterialCommunityIcons"
                name="arrow-bottom-left"
                color={Colors.red}
                size={18}
              />

              <Text style={{color: Colors.textGrey, fontSize: 13}}>Time</Text>
            </View>
          </View>
        </View>
        <VectorIcon
          type="MaterialIcons"
          name="call"
          color={Colors.teal}
          size={24}
        />
      </View>
    </View>
  );
};

export default RecentCalls;
const styles = StyleSheet.create({
  container: {},
  recentText: {
    color: Colors.white,
    fontSize: 16,
    marginVertical: 5,
  },
  callContainer: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImg: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  userName: {
    color: Colors.textColor,
    fontSize: 16,
    fontWeight: '500',
  },
});
