/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import { IonIcon } from '../components/shared/IonIcon';

const TopTab = createMaterialTopTabNavigator();

export const MaterialTopTabNavigator = () => {
  return (
    <>
        <HamburgerMenu />
        <TopTab.Navigator>
        <TopTab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: ({color}) =>(<IonIcon name='person-circle-outline' size={20} color={color}/>) }}/>
        <TopTab.Screen name="About" component={AboutScreen} options={{tabBarIcon: ({color}) =>(<IonIcon name='information-circle-outline' size={20} color={color}/>) }}/>
        </TopTab.Navigator>
    </>
  );
};