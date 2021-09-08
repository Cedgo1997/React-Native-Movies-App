/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDbNowPlaying } from '../interfaces/movieInterface';

export const HomeScreen = () => {

  const navigation = useNavigation();


  useEffect(() => {
    movieDB.get<MovieDbNowPlaying>('/now_playing').then(resp => {
      console.log(resp.data.results[0].title);
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="ir a detalles" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};