import React, {useRef} from 'react';
import {View, Text, StyleSheet, FlatList, LayoutAnimation} from 'react-native';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import {MessageData} from '../data/messageData';

const UserMessageView = ({message, time}) => (
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

const OtherMessageView = ({message, time}) => (
  <View style={styles.otherUserContainer}>
    <View style={styles.otherUserInnerContainer}>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  </View>
);

const keyExtractor = item => item.msgId.toString();

const ChatBody = () => {
  const renderItem = ({item}) => {
    return item.id === '1' ? (
      <UserMessageView message={item.message} time={item.time} />
    ) : (
      <OtherMessageView message={item.message} time={item.time} />
    );
  };

  const flatListRef = useRef(null);
  const scrollToBottom = () => {
    // flatListRef.current.scrollToEnd({animated: true});
    flatListRef.current?.scrollToEnd();
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        onContentSizeChange={scrollToBottom}
        data={MessageData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <View style={styles.scrollDownArrow}>
        <VectorIcon
          style={styles.checkIcon}
          type="MaterialIcons"
          name="keyboard-double-arrow-down"
          color={Colors.white}
          size={20}
        />
      </View>
    </>
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
    width: '85%',
    flexDirection: 'row',
    backgroundColor: Colors.teal,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 15,
    alignItems: 'flex-end',

    position: 'relative',
  },
  otherUserInnerContainer: {
    width: '85%',
    flexDirection: 'row',
    backgroundColor: '#2a4d52',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'flex-end',

    position: 'relative',
  },
  message: {
    fontSize: 14,
    color: Colors.white,
    marginRight: 10,
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
  scrollDownArrow: {
    backgroundColor: Colors.primaryColor,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
});
