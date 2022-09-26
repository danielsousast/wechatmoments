import { Navigation } from 'react-native-navigation';
import Counter from '../features/Counter/ui/Counter';
import Home from '../features/Home/ui/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default RootNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
    )

  }