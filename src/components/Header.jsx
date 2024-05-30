import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        <Image
          source={require('./../assets/appIcon.png')}
          style={styles.appIcon}
        />
      </View>

      <View>
        <Image source={require('./../assets/dp.png')} style={styles.dp} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appIcon: {
    width: 28,
    height: 28,
    aspectRatio: 1 / 1,
  },
  dp: {
    width: 44,
    height: 44,
    aspectRatio: 1 / 1,
  },
  appIconContainer: {
    width: 44,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
