import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../theme/Colors';
import {ViewedStatusData} from '../data/ViewedStatusData';
import FullModal from '../utils/FullModal';

const RecentStatus = () => {
  const [showStatusModal, setShowStatusModal] = useState(true);
  const setTimeUp = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: false}));
  };
  const viewStatus = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: true}));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.recentUpdates}>Recent Updates</Text>
      {ViewedStatusData.map(item => (
        <View key={item.id}>
          <TouchableOpacity onPress={() => viewStatus(item.id)}>
            <View style={styles.storySection}>
              <View style={styles.imageStory}>
                <Image source={item.storyImg} style={styles.statusStyle} />
              </View>
              <View>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <FullModal
            showStatusModal={showStatusModal[item.id] || false}
            setShowStatusModal={value =>
              setShowStatusModal(prev => ({...prev, [item.id]: value}))
            }
            item={item}
            setTimeUp={() => setTimeUp(item.id)}
          />
        </View>
      ))}
    </View>
  );
};

export default RecentStatus;
const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  recentUpdates: {
    color: Colors.textGrey,
    fontSize: 14,
    paddingTop: 20,
  },
  statusStyle: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  imageStory: {
    height: 50,
    width: 50,
    borderColor: Colors.tertiary,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.white,
  },
  time: {
    fontSize: 13,
    color: Colors.textGrey,
  },

  storySection: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
});
