import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const ProductCard = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/girl2.jpeg')}
        style={styles.coverImage}
      />
      <View style={styles.content}>
        <Text style={styles.coverImageTitle}>Title</Text>
        <Text style={styles.coverImageSubTitle}>$subTitle</Text>
      </View>
      <TouchableOpacity
        onPress={() => setIsLiked(!isLiked)}
        style={styles.likeContainer}>
        {isLiked ? (
          <FontAwesome name="heart" size={20} color={'#E55B5B'} />
        ) : (
          <FontAwesome name="heart-o" size={20} color={'#E55B5B'} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    position: 'relative',
  },
  coverImage: {
    height: 256,
    width: 167,
    borderRadius: 20,
    marginVertical: 10,
    marginRight: 15,
  },
  coverImageTitle: {
    paddingLeft: 10,
    paddingBottom: 5,
    color: '#444444',
    fontWeight: '600',
  },
  coverImageSubTitle: {
    paddingLeft: 10,
    color: '#9C9C9C',
  },
  likeContainer: {
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 34,
    height: 34,
    position: 'absolute',
    left: 0,
    top: 23,
  },
});
