import React, {useEffect} from 'react';
import {View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  let detailArr = [{id: 1}, {id: 2}, {id: 3}];
  let Btns = detailArr.map(val => {
    return (
      <Button
        key={val.id}
        title={`Detail ${val.id} 열기`}
        onPress={() => navigation.push('Detail', {id: val.id})}
      />
    );
  });

  useEffect(() => {
    navigation.setOptions({
      title: '홈',
      headerStyle: {
        backgroundColor: 'salmon',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
    });
  }, [navigation]);

  return (
    <View>
      {Btns}
      <Button
        title="춘식이보기"
        onPress={() => navigation.navigate('Chunsick')}
      />
      <Button
        title="헤더없어서안뜰껄?"
        onPress={() => navigation.navigate('headerLessScreen')}
      />
    </View>
  );
};

export default HomeScreen;
