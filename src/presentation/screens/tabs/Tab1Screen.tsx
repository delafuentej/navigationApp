/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */

import {Text, View } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const Tab1Screen = () => {
  return (
    <View>
        <HamburgerMenu />
        <Text>Tab1Screen</Text>
    </View>
  );
};
