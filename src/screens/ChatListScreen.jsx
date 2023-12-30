import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import ChatList from '../components/ChatList';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <ChatList />
      <TouchableOpacity style={styles.contactIcon}>
        <VectorIcon
          type="MaterialCommunityIcons"
          name="message-reply-text"
          size={22}
          color={Colors.black}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: Colors.background,
  },
  contactIcon: {
    backgroundColor: Colors.tertiary,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
