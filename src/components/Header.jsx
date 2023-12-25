import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.secondaryColor,
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        WhatsApp
      </Text>
      <View style={styles.headerIcons}>
        <VectorIcon
          type="Feather"
          name="camera"
          color={Colors.secondaryColor}
          size={22}
        />
        <VectorIcon
          type="Octicons"
          name="search"
          color={Colors.secondaryColor}
          size={20}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color={Colors.secondaryColor}
          size={18}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
});
