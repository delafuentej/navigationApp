/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {  Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { type NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';


export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(()=>{
      navigation.setOptions({
          headerLeft: ()=>(
            <Pressable
            onPress={()=> navigation.dispatch( DrawerActions.toggleDrawer)}
            >
              <Text>Menu</Text>
            </Pressable>
          ),
      });
  },[]);

  return (
    <View style={globalStyles.container}>
      {/* <Pressable 
        onPress={()=> navigation.navigate('Products' as never)}
        style={globalStyles.primaryBtn}>
          <Text style={globalStyles.textBtn}>Products</Text>
      </Pressable> */}
      <PrimaryButton 
        onPress={()=> navigation.navigate('Products')}
        label='Products'
      />
      <PrimaryButton
        onPress={()=> navigation.navigate('Settings')}
        label='Settings'
      />
    </View>
  );
};
