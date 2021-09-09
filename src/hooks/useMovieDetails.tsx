/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast?: Cast[];
}

export const useMovieDetails = (movieId: number) => {
    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    useEffect(() => {
        const getMovieDetails = async () => {
            const movieFullPromise = movieDB.get<MovieFull>(`/${movieId}`);
            const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

            const [movieDetailsResponse, castResponse] = await Promise.all([movieFullPromise, castPromise]);
            setstate({
                isLoading: false,
                movieFull: movieDetailsResponse.data,
                cast: castResponse.data.cast,
            });
        };
        getMovieDetails();

    }, [movieId]);

    return {
        ...state,
    };
};

