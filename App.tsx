import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactUs from './src/Contact.tsx';
import Project from './src/Projects.tsx';
import Landing from './src/Landing.tsx';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          options={{headerShown: false}}
          component={Landing}
        />
        <Stack.Screen
          name="contactus"
          options={{headerShown: false}}
          component={ContactUs}
        />
        <Stack.Screen
          name="projects"
          options={{headerShown: false}}
          component={Project}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
