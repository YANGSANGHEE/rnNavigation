import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

// navigation Hook

//1.
// const OpenDetailButton = ({onPress}) => {
//   return <Button title="Detail 1 열기" onPress={onPress}></Button>;
// };

//2.
// const OpenDetailButton = ({navigation}) => {
//   return (
//     <Button
//       title="Detail 1 열기"
//       onPress={() => navigation.push('Detail', {id: 1})}></Button>
//   );
// };

//useNavigation

const OpenDetailButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Detail1"
      onPress={() => navigation.push('Detail', {id: 1})}></Button>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
};

const SearchScreen = () => {
  return <Text>Search</Text>;
};

const NotificatinScreen = () => {
  return <Text>Notificatin</Text>;
};

const MessageScreen = () => {
  return <Text>Message</Text>;
};

const Tab = createMaterialBottomTabNavigator();
const MainScreen = () => {
  console.log(Tab);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      tabBarOptions={{
        showIcon: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarColor: 'black',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
          tabBarColor: 'green',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificatinScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={24} />
          ),
          tabBarColor: 'green',
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '메세지',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={24} />
          ),
          tabBarColor: 'green',
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
