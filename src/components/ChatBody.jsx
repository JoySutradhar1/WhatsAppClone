import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import {MessageData} from '../data/messageData';

const ChatBody = () => {
  const UserMessageView = ({message, time}) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
          <VectorIcon
            style={styles.checkIcon}
            type="Ionicons"
            name="checkmark-done"
            color={Colors.blue}
            size={13}
          />
        </View>
      </View>
    );
  };
  const OtherMessageView = ({message, time}) => {
    return (
      <View style={styles.otherUserContainer}>
        <View style={styles.otherUserInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      {MessageData.map(item => (
        <>
          <UserMessageView message={item.message} time={item.time} />
          <OtherMessageView message={item.message} time={item.time} />
        </>
      ))}
    </ScrollView>
  );
};

export default ChatBody;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  otherUserContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  userInnerContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.teal,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 15,
    alignItems: 'flex-end',
    gap: 6,
    width: '85%',
    position: 'relative',
  },
  otherUserInnerContainer: {
    flexDirection: 'row',
    backgroundColor: '#2a4d52',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'flex-end',
    gap: 6,
    width: '85%',
    position: 'relative',
  },
  message: {
    fontSize: 14,
    color: Colors.white,
  },
  time: {
    color: Colors.white,
    fontSize: 9,
    position: 'absolute',
    right: 20,
    bottom: 5,
  },
  checkIcon: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
});
