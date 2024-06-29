/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {  View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
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
