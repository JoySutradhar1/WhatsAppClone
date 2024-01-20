import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import profile from '../assets/p1.jpg';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import {useNavigation} from '@react-navigation/native';

const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerProfile}>
        <VectorIcon
          type="Ionicons"
          name="arrow-back"
          color={Colors.secondaryColor}
          size={18}
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Image style={styles.profileImg} source={profile} />
        <View>
          <Text style={styles.nameText}>Joy</Text>
          <Text style={styles.activeStatus}>Last Seen today at 5:09PM</Text>
        </View>
      </View>
      <View style={styles.headerIcons}>
        <VectorIcon
          type="Ionicons"
          name="videocam"
          color={Colors.white}
          size={22}
        />
        <VectorIcon
          type="MaterialIcons"
          name="call"
          color={Colors.white}
          size={20}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color={Colors.white}
          size={18}
        />
      </View>
    </View>
  );
};

export default ChatHeader;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  backIcon: {
    marginRight: 10,
  },
  profileImg: {borderRadius: 50, height: 40, width: 40},
  nameText: {
    color: Colors.textColor,
    fontSize: 16,
  },
  activeStatus: {
    color: Colors.textColor,
    fontSize: 11,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
