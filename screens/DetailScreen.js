import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

//useRoute
const IdText = () => {
  const route = useRoute();

  return <Text style={styles.text}>id:{route.params.id}</Text>;
};

const DetailScreen = ({route, navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: `디테일${route.params.id}`,
      headerStyle: {
        backgroundColor: 'salmon',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text>Left</Text>
        </TouchableOpacity>
      ),
      headerTitle: ({children}) => (
        <View>
          <Text>{children}</Text>
        </View>
      ),
      headerRight: () => (
        <View>
          <Text>Right</Text>
        </View>
      ),
      headerBackVisible: false,
    });
  }, [navigation, route.params.id]);
  return (
    <View style={styles.block}>
      <IdText />
      <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default DetailScreen;
