import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Category from '../components/Category';
import {FlatList} from 'react-native';
import ProductCard from '../components/ProductCard';
import {TouchableWithoutFeedback} from 'react-native';

const categories = ['Trending Now', 'All', 'New', 'Offer Zone'];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderProductCard = ({item}) => {
    return <ProductCard />;
  };

  return (
    <LinearGradient
      colors={['#FDF0F3', '#FFFBFC', '#FFFBFC']}
      style={styles.container}>
      <Header />
      <View>
        <Text style={styles.MatchText}> Match Your Style</Text>
        <View style={styles.InputContainer}>
          <View style={styles.iconContainer}>
            <Fontisto name="search" size={19} color={'#C0C0C0'} />
          </View>
          <TextInput
            style={styles.TextInput}
            placeholder="Search"
            placeholderTextColor="#C0C0C0"
          />
        </View>

        <FlatList
          data={categories}
          renderItem={({item}) => (
            <Category
              item={item}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
          keyExtractor={item => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{height: 45}}
        />
        <View>
          <ProductCard />
          <ProductCard />
        </View>
        <Pressable style={styles.productCard}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={renderProductCard}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  InputContainer: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    marginVertical: 20,
  },
  TextInput: {
    flex: 1,
  },
  iconContainer: {
    marginHorizontal: 20,
  },
  MatchText: {
    fontSize: 28,
    color: '#000000',
    marginTop: 25,
  },
  container: {
    padding: 20,
  },
  productCard: {
    flexDirection: 'row',
  },
});
