/* eslint-disable jsx-quotes */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors} from '../theme/theme';
import { View, useWindowDimensions } from 'react-native';
import { BottomTabNavigator } from './BottomTabNavigator';
import { IonIcon } from '../components/shared/IonIcon';



export type RootDrawerParams = {
    StackNavigator: undefined, // home does not receive any argument
    Profile: undefined,
};

const Drawer = createDrawerNavigator<RootDrawerParams>();


export const DrawerNavigator = () => {
    const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
        drawerContent={(props)=> <CustomDrawerContent {...props} />}
        screenOptions={{
            drawerType: (dimensions.width >= 758) ? 'permanent' : 'slide',
            headerShown: false,
           drawerContentStyle:{
            backgroundColor: globalColors.background,
           },
            drawerActiveBackgroundColor: globalColors.primary,
            drawerActiveTintColor: globalColors.white,
            drawerInactiveTintColor: globalColors.primary,
            drawerItemStyle:{
                borderRadius: 100,
                paddingHorizontal: 20,

            },
        }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name='Tabs' component={BottomTabNavigator} options={{drawerIcon: ({color}) =>(<IonIcon name='tv-outline' color={color}/>) }} />
      <Drawer.Screen name='Profile' component={ProfileScreen} options={{drawerIcon: ({color}) =>(<IonIcon name='person-outline' color={color}/>) }}/>
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps ) => {

    return(
        <DrawerContentScrollView>
            <View
            style={{
                height:200,
                backgroundColor: globalColors.background,
                margin: 30,
                borderRadius: 50,
            }}
            />
        <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};