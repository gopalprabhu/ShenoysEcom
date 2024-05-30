import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Category = ({item, selectedCategory, setSelectedCategory}) => {
  console.log('category is:', selectedCategory);
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && {
            color: '#FFFFFF',
            backgroundColor: '#E96E6E',
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    borderRadius: 16,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#DFDCDC',
    color: '#938F8F',
    fontWeight: '700',
    padding: 20,
    textAlign: 'center',
  },
});
