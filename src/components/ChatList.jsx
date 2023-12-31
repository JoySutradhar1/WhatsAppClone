import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import {ChatListData} from '../data/ChatListData';
import {useNavigation} from '@react-navigation/native';

const ChatList = () => {
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate('ChatScreen');
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={onNavigate} style={styles.container}>
      <View style={styles.chatContainer}>
        <Image source={item.profile} style={styles.profileImg}></Image>
        <View>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.msg}>{item.message}</Text>
        </View>
      </View>
      <View style={styles.timeNMode}>
        <Text style={styles.timeStump}>{item.time}</Text>
        {item.mute && (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="volume-variant-off"
            size={22}
            color={Colors.textGrey}
          />
        )}
      </View>
    </TouchableOpacity>
  );

  const keyExtractor = item => item.id.toString();

  return (
    <FlatList
      data={ChatListData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      inverted
    />
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
  },
  chatContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  profileImg: {borderRadius: 50, height: 40, width: 40},
  userName: {
    color: Colors.textColor,
    fontSize: 16,
  },
  msg: {
    color: Colors.textGrey,
    fontSize: 14,
    marginTop: 5,
  },
  timeStump: {
    color: Colors.textGrey,
    fontSize: 12,
  },
  timeNMode: {
    gap: 8,
    alignItems: 'center',
  },
});
