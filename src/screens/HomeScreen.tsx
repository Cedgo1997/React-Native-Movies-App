import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

export const HomeScreen = () => {

  const { width } = useWindowDimensions();
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }

  return (
    <GradientBackground>

      <ScrollView>

        <View style={{ marginTop: top + 20 }}>

          {/* Main movies */}

          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              itemWidth={300}
              itemHeight={420}
              sliderWidth={width}
              windowSize={1}
              inactiveSlideOpacity={0.8}
            />
          </View>

          {/* Popular movies */}
          <HorizontalSlider movies={nowPlaying} title="Now Playing" />
          <HorizontalSlider movies={popular} title="Popular" />
          <HorizontalSlider movies={topRated} title="Top Rated" />
          <HorizontalSlider movies={upcoming} title="Upcoming" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
