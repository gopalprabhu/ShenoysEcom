import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen} from './src/screens';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function CartScreen() {
  return (
    <View>
      <Text>Cart!</Text>
    </View>
  );
}
function ReorderScreen() {
  return (
    <View>
      <Text>Reorder!</Text>
    </View>
  );
}
function AccountScreen() {
  return (
    <View>
      <Text>Account!</Text>
    </View>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'red',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return <Entypo name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Reorder"
          component={ReorderScreen}
          options={{
            tabBarIcon: ({size, color}) => {
              return <FontAwesome name="reorder" size={23} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({size, color}) => {
              return <Feather name="shopping-cart" size={24} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({size, color}) => {
              return (
                <MaterialCommunityIcons
                  name="account"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
