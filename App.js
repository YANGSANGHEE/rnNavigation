import React from 'react';
import {View, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeScreen from './screens/HomeScreen';
// import DetailScreen from './screens/DetailScreen';
// import Chunsick from './screens/Chunsik';
// import HeaderlessScreen from './screens/HeaderlessScreen';

// const Stack = createNativeStackNavigator();
//screen,navigation

const Drawer = createDrawerNavigator();
//Drawer-Navigator

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => {
          navigation.navigate('Setting');
        }}
      />
    </View>
  );
};

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Detail'} component={DetailScreen} />
        <Stack.Screen name={'Chunsick'} component={Chunsick} />
        <Stack.Screen
          name={'headerLessScreen'}
          component={HeaderlessScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator> */}
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        backBehavior="history"
        drawerContent={({navigation}) => (
          <SafeAreaView>
            <Text>CusntomDrawer</Text>
            <Button onPress={() => navigation.closeDrawer()} title="닫기" />
          </SafeAreaView>
        )}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈', headerLeft: () => <Text>Left</Text>}}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{title: '설정'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
