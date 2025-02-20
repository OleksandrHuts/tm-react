import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import './MovieSearch.scss'

//API
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzc1N2M3ODlmMTQ0MWIwMDllZjA2MDkyNmRhMjMxZCIsIm5iZiI6MTcyOTYyMjA3NC45MjUsInN1YiI6IjY3MTdmMDNhMjJmMTRhMGM1ZDg1NzE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L-KR-SwJI4Hd0-KidGNyh7WgcO2Brk3hnTodRgzrNW4'
    }
};

const BASE_URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'

export default function MovieSearch() {
    const [movieName, setMovieName] = useState('n/a');
    const [movieList, setMovieList] = useState([]);

    function searchMovies() {
        fetch(BASE_URL + `&query=${movieName}`, options)
            .then(res => res.json())
            .then(res => setMovieList(res.results))
            .catch(err => console.error(err));
    }

    return (
        <div className="container">
            <Button
                clickHandler={searchMovies}
                iconColor='#fff'
                label='Search'
                className='red' />
            <Input
                onChangeFunction={setMovieName}
                type='text'
                placeholder='Movie name' />
            <h2>We're looking for {movieName}</h2>
            <div className="grid">
                {
                    movieList.map(movie => {
                        return (
                            <div className="card">
                                <img
                                    className="card-img"
                                    width="100%" height="225"
                                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                                <div className="card-body">
                                    <h2>${movie.title}</h2>
                                    <p className="card-text">${movie.overview}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}