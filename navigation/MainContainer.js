import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './Screens/Home';
import Daftar from './Screens/Daftar';
import Akun from './Screens/Akun';

//Screen names
const homeName = "Home";
const detailsName = "Daftar Mobil";
const accName = "Akun";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={accName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === accName) {
              iconName = focused ? 'md-person' : 'md-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          tabBarStyle: { backgroundColor: "#99A3D2"},
          tabBarActiveBackgroundColor: "#4169E1",
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          labelStyle: { fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={Home} options={{ headerShown: false }} />
        <Tab.Screen name={detailsName} component={Daftar} options={{ headerShown: false }} />
        <Tab.Screen name={accName} component={Akun} options={{ headerShown: false, tabBarStyle:{display:'none'} }} />
        
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

export default MainContainer;