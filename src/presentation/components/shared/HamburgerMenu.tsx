/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable, Text } from 'react-native';


export const HamburgerMenu = ()=>{
    const navigation = useNavigation();

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
    return<></>;
};