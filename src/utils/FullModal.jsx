import {View, Text, Modal, Image, StyleSheet} from 'react-native';
import React from 'react';
import img from '../assets/status1.jpg';
import user1 from '../assets/p1.jpg';
import {Colors} from '../theme/Colors';
import VectorIcon from './VectorIcon';
import {useNavigation} from '@react-navigation/native';
import ProgressBar from './ProgressBar';

const FullModal = props => {
  const {showStatusModal, setShowStatusModal, item, setTimeUp} = props;
  const updateModalStatus = () => {
    setShowStatusModal(prev => ({...prev, [item.id]: false}));
  };
  const navigation = useNavigation();
  return (
    <Modal
      animationType="fade"
      visible={showStatusModal}
      onRequestClose={updateModalStatus}>
      <View style={styles.container}>
        <ProgressBar setTimeUp={setTimeUp} />
        <View style={styles.topContainer}>
          <View style={styles.statusHeader}>
            <VectorIcon
              type="Ionicons"
              name="arrow-back"
              color={Colors.white}
              size={18}
              style={styles.backIcon}
              onPress={() =>
                setShowStatusModal(prev => ({...prev, [item.id]: false}))
              }
            />
            <Image style={styles.profile} source={item.userImg} />
            <Text style={styles.userName}>{item.name}</Text>
          </View>
          <VectorIcon
            type="Entypo"
            name="dots-three-vertical"
            color={Colors.white}
            size={18}
          />
        </View>
        <Image style={styles.storyImg} source={item.storyImg} />
        <Text style={styles.storyMsg}>My Status</Text>
        <View style={styles.replySection}>
          <VectorIcon
            type="Entypo"
            name="chevron-small-up"
            color={Colors.white}
            size={24}
            onPress={() =>
              setShowStatusModal(prev => ({...prev, [item.id]: false}))
            }
          />
          <Text
            style={{
              fontSize: 15,
              color: Colors.white,
              textAlign: 'center',
              marginBottom: 10,
            }}>
            Reply
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default FullModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  statusHeader: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  profile: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  userName: {
    fontSize: 17,
    color: Colors.white,
  },
  storyImg: {
    height: '75%',
    width: '100%',
  },
  storyMsg: {
    fontSize: 17,
    textAlign: 'center',
    color: Colors.white,
    marginTop: 10,
  },
  replySection: {
    alignItems: 'center',
  },
});
