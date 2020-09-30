import React, { useState, useEffect } from 'react'
import { getMovies } from '../helpers/movies'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';



function MovieCarousel() {
    const [fetchMovies, setMovies] = useState([]);
    const [index, selectIndex] = useState(0);

    const handleCarousel = (selected, e) => {
        selectIndex(selected)
    }

    useEffect(() => {
        const fetch = async () => {
            setMovies(await getMovies())
        }
        fetch()
    }, []);

    const movieData = fetchMovies.slice(0, 5).map((m) => {
        return (
            <Carousel.Item key={m['id']}>           
            <img style={{height:500 ,width:'800px' , margin:'auto'}} class="d-block w-100%" src={m['backpath']} alt='First Slide' />
                <Carousel.Caption>
                    <h3>{m['title']}</h3>
                    <p>{m['overview']}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    });

    console.log(movieData)

    return (
    
            <Carousel activeIndex={index} onSelect={handleCarousel}>
                {movieData}
            </Carousel>
        

    )
}

export default MovieCarousel
