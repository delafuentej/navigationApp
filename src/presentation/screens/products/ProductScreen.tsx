/* eslint-disable prettier/prettier */
import { type RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { type RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';

export const ProductScreen = () => {
    const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

    const navigation = useNavigation();
    //to put the product specifications in the headers product
    useEffect(()=>{
      navigation.setOptions({
        title:params.name,
      });
    }, []);
    
  return (
    <View style={globalStyles.container}>
        <Text> Product Screen</Text>
        <Text>{params.id}- {params.name}</Text>
    </View>
  );
};
