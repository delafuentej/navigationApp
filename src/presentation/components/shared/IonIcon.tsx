/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    name: string;
    size?: number;
    color?:string;
}


export const IonIcon = ({name, size = 20, color='black'}: Props) => {
  return (
    <Text> <Icon name={name} size={size} color={color} /></Text>
  );
};
