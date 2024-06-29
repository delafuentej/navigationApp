/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
// import { Tab2Screen } from '../screens/tabs/Tab2Screen';
// import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { MaterialTopTabNavigator } from './MaterialTopTabNavigator';
import { StackNavigator } from './StackNavigator';

const BottomTab = createBottomTabNavigator();

export const  BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
    sceneContainerStyle={{
        backgroundColor: globalColors.background,
    }}
    screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {
            marginBottom: 5,
        },
        headerStyle: {
            elevation: 0,
            borderColor: 'transparent',
            shadowColor: 'transparent',
        },
        tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
        },
    }}
    >
      <BottomTab.Screen name="Tab1" options={{title:'Tab1'}} /* tabBarIcon: ({color}) =>(<Text style={{color}}>Tab1</Text>) */  component={Tab1Screen} />
      <BottomTab.Screen name="Tab2" options={{title:'Tab2'}} /* tabBarIcon: ({color}) =>(<Text style={{color}}>Tab2</Text>) */ component={MaterialTopTabNavigator} />
      <BottomTab.Screen name="Tab3" options={{title:'Tab3'}} /* tabBarIcon: ({color}) =>(<Text style={{color}}>Tab3</Text>) */ component={StackNavigator} />
    </BottomTab.Navigator>
  );
}