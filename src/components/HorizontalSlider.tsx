import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[]
}

export const HorizontalSlider = ({ title = '', movies }: Props) => {
    return (
        <View style={{ height: 260 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 10 }} >{title}</Text>
            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item => item.id.toString())}
                horizontal={true}
                windowSize={1}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
