/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/products/ProductScreen';

export type RootStackParams = {
    Home: undefined, // home does not receive any argument
    Products: undefined,
    Product: {id:number, name:string},
    Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigator = ()=>  {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                elevation: 0,
                shadowColor:'transparent',
            },
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

