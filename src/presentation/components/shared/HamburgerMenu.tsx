/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable } from 'react-native';
import {IonIcon} from './IonIcon';
import { globalColors } from '../../theme/theme';


export const HamburgerMenu = ()=>{
    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerLeft: ()=>(
                <Pressable
                    onPress={()=> navigation.dispatch( DrawerActions.toggleDrawer)}
                 >
                <IonIcon name="menu-outline" size={40} color={globalColors.primary}/>
                 </Pressable>
            ),
        });
    },[]);
    return<></>;
};