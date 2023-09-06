import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/Home';
import Reg from './Screens/Reg';
import Delivery from './Screens/Delivery';
import Example_textinput from './Screens/Example_textinput';
import Example_usestate from './Screens/Example_usestate';
import Example_flatlist from './Screens/Example_flatlist';
import Example_photos from './Screens/Example_photos';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style ={{ flex:1, backgroundColor:'#8bc292 '}}>
 <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Reg" component={Reg} />
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen name="Example_textinput" component={Example_textinput}/>
      <Stack.Screen name="Example_usestate" component={Example_usestate}/>
      <Stack.Screen name="Example_flatlust" component={Example_flatlist}/>
      <Stack.Screen name="Example_photos" component={Example_photos}/>


 
  </Stack.Navigator>

 </NavigationContainer>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
