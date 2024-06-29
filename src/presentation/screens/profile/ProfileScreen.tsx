/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {
  // insents => to determine the area to be occupied for displaying information
 // const insents = useSafeAreaInsets();
    const {top} = useSafeAreaInsets();
    const navigation = useNavigation();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top,
    }}>
        <Text> ProfileScreen</Text>
        <PrimaryButton
          onPress={()=> navigation.dispatch( DrawerActions.toggleDrawer)}
          label='Open Menu'
        />
    </View>
  );
};
