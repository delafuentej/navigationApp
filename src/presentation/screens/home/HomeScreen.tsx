/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {  View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      {/* <Pressable 
        onPress={()=> navigation.navigate('Products' as never)}
        style={globalStyles.primaryBtn}>
          <Text style={globalStyles.textBtn}>Products</Text>
      </Pressable> */}
      <PrimaryButton 
        onPress={()=> navigation.navigate('Products' as never)}
        label='Products'
      />
      <PrimaryButton
        onPress={()=> navigation.navigate('Settings' as never)}
        label='Settings'
      />
    </View>
  );
};
