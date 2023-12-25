import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CommunityImg from '../assets/Community.png';
import {Colors} from '../theme/Colors';

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.communityImg} source={CommunityImg} />
      <Text style={styles.hText}>Stay connected with a community</Text>
      <Text style={styles.text}>
        Communities bring members together in topic-based groups, and make it
        easy to get admin announcements. Any community you're added to will
        appear here.
      </Text>
      <Text
        style={{color: Colors.tertiary, margin: 10, fontSize: 14}}
        onPress={() =>
          Linking.openURL('https://faq.whatsapp.com/231869526393268?lang=en')
        }>
        See example communities {'>'}
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Start your Community</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  communityImg: {
    height: 150,
    width: 250,
  },
  hText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 14,
  },
  btn: {
    backgroundColor: Colors.tertiary,
    marginTop: 30,
    width: '90%',
    padding: 8,
    borderRadius: 20,
  },
  btnTxt: {
    color: Colors.background,
    fontSize: 14,
    textAlign: 'center',
  },
});
