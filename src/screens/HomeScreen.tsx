/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

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
    <ScrollView>

      <View style={{ marginTop: top + 20 }}>

        {/* Main movies */}

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

        {/* Popular movies */}
        <HorizontalSlider movies={currentMovies} title="Current Movies" />
        <HorizontalSlider movies={currentMovies} />
        <HorizontalSlider movies={currentMovies} />
      </View>
    </ScrollView>
  );
};
