/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';

const TopTab = createMaterialTopTabNavigator();

export const MaterialTopTabNavigator = () => {
  return (
    <>
        <HamburgerMenu />
        <TopTab.Navigator>
        <TopTab.Screen name="Profile" component={ProfileScreen} />
        <TopTab.Screen name="About" component={AboutScreen} />
        </TopTab.Navigator>
    </>
  );
};