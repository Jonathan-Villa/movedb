import axios from 'axios'

const apiKey = process.env.API_KEY
const linkURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const postersURL = 'https://image.tmdb.org/t/p/w500/'

// get movies

export const getMovies = async ()=>{
    try{
        const {data} = await axios.get(linkURL)
        const movie = data['results'].map((m)=> ({ 
            id: m['id'],
            title: m['title'],
            overview: m['overview'],
            releaseDate: m['release_date'],
            backpath: postersURL+ m['backdrop_path']
        }))
     return movie
    }catch (e){
        console.log(e)
    }
}


