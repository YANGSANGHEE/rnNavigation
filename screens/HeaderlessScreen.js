import React from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HeaderlessScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      {/* ios에서 statusBar영역침범 때문에 사용 */}
      <View>
        <Text>No Header</Text>
        <Button onPress={() => navigation.pop()} title="뒤로가기" />
      </View>
    </SafeAreaView>
  );
};

export default HeaderlessScreen;
