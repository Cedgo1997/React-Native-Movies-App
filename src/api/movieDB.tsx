import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '527d31593527d0b6d65cca79c0370e36',
        languaje: 'es-ES',
    },
});

export default movieDB;