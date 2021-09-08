/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

  const navigation = useNavigation();

  const { currentMovies, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={20} />
      </View>
    )
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="ir a detalles" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};
