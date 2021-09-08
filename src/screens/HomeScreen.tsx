/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';

export const HomeScreen = () => {

  const { width } = useWindowDimensions();
  const { currentMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }

  return (
    <View style={{ marginTop: top + 20 }}>
      <View style={{ height: 440 }}>
        <Carousel
          data={currentMovies}
          renderItem={({ item }) => <MoviePoster movie={item} />}
          itemWidth={300}
          itemHeight={420}
          sliderWidth={width}
          windowSize={1}
        />
      </View>
    </View>
  );
};
