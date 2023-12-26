import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../theme/Colors';
import {TextInput} from 'react-native-gesture-handler';
import VectorIcon from '../utils/VectorIcon';

const ChatFooter = () => {
  const [message, setMessage] = useState('');
  const onChange = value => {
    setMessage(value);
  };
  const onSend = value => {
    setMessage('');
    Alert.alert('message send!!!!');
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={[styles.row]}>
          <VectorIcon
            type="MaterialIcons"
            name="emoji-emotions"
            color={Colors.secondaryColor}
            size={25}
          />
          <TextInput
            multiline
            placeholderTextColor={Colors.secondaryColor}
            placeholder="Type a message"
            style={[styles.textInput]}
            value={message}
            onChangeText={value => onChange(value)}
          />
          <View style={[styles.row]}>
            <VectorIcon
              type="Entypo"
              name="attachment"
              color={Colors.secondaryColor}
              size={18}
              style={{marginHorizontal: 15}}
            />
            {message === '' && (
              <VectorIcon
                type="FontAwesome"
                name="camera"
                color={Colors.secondaryColor}
                size={18}
              />
            )}
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        {message === '' ? (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="microphone"
            color={Colors.white}
            size={22}
          />
        ) : (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="send"
            color={Colors.white}
            size={22}
            onPress={onSend}
          />
        )}
      </View>
    </View>
  );
};

export default ChatFooter;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  leftContainer: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
  },
  textInput: {
    color: Colors.white,
    flex: 1,
    textAlignVertical: 'top',
    borderColor: Colors.secondaryColor,
  },
  rightContainer: {
    backgroundColor: Colors.tertiary,
    padding: 10,
    borderRadius: 50,
  },
});
