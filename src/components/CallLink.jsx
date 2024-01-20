import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';

const CallLink = () => {
  return (
    <View style={styles.container}>
      <VectorIcon
        type="Feather"
        name="link-2"
        color={Colors.black}
        size={24}
        style={styles.linkIcon}
      />
      <View style={{textAlign: 'center'}}>
        <Text style={styles.linkText}>Create Call Link</Text>
        <Text style={styles.linkShareText}>
          Share a link for for your WhatsApp call
        </Text>
      </View>
    </View>
  );
};

export default CallLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  linkIcon: {
    padding: 10,
    backgroundColor: Colors.teal,
    borderRadius: 50,
  },
  linkText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: '500',
  },
  linkShareText: {
    color: Colors.textGrey,
    fontSize: 13,
  },
});
