import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

const Chunsick = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: '춘시기는기여워',
    });
  }, [navigation]);
  return (
    <View>
      <Image
        source={{
          uri: 'https://www.jungle.co.kr/image/ea06cd0346fa8777cb624e3f',
        }}
        style={{width: 300, height: 300}}></Image>
    </View>
  );
};

export default Chunsick;
