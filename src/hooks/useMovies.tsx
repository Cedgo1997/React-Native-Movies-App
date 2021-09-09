/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDbResponse } from '../interfaces/movieInterface';

export const useMovies = () => {
    const [currentMovies, setCurrentMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const getMovies = async () => {
        const resp = await movieDB.get<MovieDbResponse>('/now_playing');
        setCurrentMovies(resp.data.results);
        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
    return {
        currentMovies,
        isLoading,
    };
};

