/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={globalStyles.container}>
        <Text>Settings Screen</Text>
        <PrimaryButton
          onPress={()=> navigator.goBack()}
          label='Go back'
        />
         <PrimaryButton
          onPress={()=> navigator.dispatch(StackActions.popToTop())}
          label='Go to Home'
        />
    </View>
  );
};
