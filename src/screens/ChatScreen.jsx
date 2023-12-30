import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatBody from '../components/ChatBody';
import ChatFooter from '../components/ChatFooter';
import wp1 from '../assets/wp1.png';
import {Colors} from '../theme/Colors';

const ChatScreen = () => {
  return (
    <>
      <ChatHeader />
      <ImageBackground source={wp1} style={styles.wp}>
        <View style={{flex: 1, position: 'relative'}}>
          <ChatBody />
        </View>
        <ChatFooter />
      </ImageBackground>
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {},
  wp: {
    // backgroundColor: '#141f13',
    // width: '100%',
    // height: '100%',
    flex: 1,
  },
});
