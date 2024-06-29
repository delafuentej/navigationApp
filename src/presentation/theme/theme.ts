/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';

export const globalColors = {
    primary: '#7037eb',
    secondary: '#f72585',
    terciary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',
    white: '#ffffff',

    background: 'skyblue',

};
export const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        backgroundColor: globalColors.background,

    },
    primaryBtn: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: '100%',
        alignItems:'center',
    },
    textBtn: {
        color: globalColors.white,
        fontSize: 20,
        fontWeight:'500',
    },

});
