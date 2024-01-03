import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import profile from '../assets/p1.jpg';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';

const MyStatus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBG}>
        <Image source={profile} style={styles.profileStyle} />

        <VectorIcon
          style={styles.addIcon}
          type="AntDesign"
          name="pluscircle"
          color={Colors.tertiary}
          size={17}
        />
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.myStatus}>My Status</Text>
        <Text style={styles.addStatus}>Tap to add status updates</Text>
      </View>
    </View>
  );
};

export default MyStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  profileStyle: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  statusContainer: {
    marginLeft: 15,
  },
  myStatus: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '500',
  },
  addStatus: {
    color: Colors.textGrey,
    fontSize: 13,
    marginTop: 3,
  },
  iconBG: {
    position: 'relative',
    borderRadius: 50,
    // borderWidth: 2,
    // borderColor: Colors.tertiary,
  },
  addIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
});
