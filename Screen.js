import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import Reanimated, {FadeIn} from 'react-native-reanimated';

const Stack = createStackNavigator();

export default function ScreensBugRepro() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function FirstScreen({navigation}) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Second')} title="click me" />
    </View>
  );
}

const longFade = FadeIn.duration(10000);

function SecondScreen() {
  return (
    <View>
      <Text>
        go back from here. you won't be able to press the "click me" button
        again until the exiting animation is finished (ie. 10 seconds).
      </Text>
      <Reanimated.View
        style={{backgroundColor: 'red'}}
        entering={longFade}
        exiting={longFade}>
        <Text>slooooow layout animation :)</Text>
      </Reanimated.View>
    </View>
  );
}
