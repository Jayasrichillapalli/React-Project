import React,{useState,useEffect}from 'react'
import axios from 'axios'; 
import './App.css'


function App() {
  const [popularMovies, setPopularMovies] = useState([])
  const [movieName, setMovieName] = useState("")
  const [searchedMovies, setSearchedMovies] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716')
      .then((res) => {
        setPopularMovies(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716`)
      .then((res) => {
        setSearchedMovies(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [movieName])

  return (
    <>
      <div style={{ textAlign: 'center' , color : 'white'}}>
        <h1> MOVIE SEARCH ENGINE</h1>
        <input  id="inputholder" value={movieName} onChange={(e) => setMovieName(e.target.value)} placeholder='Enter movie name' />
      </div>
      <div id="movie-header">
        {movieName === "" ? (
          popularMovies.map((item, i) => (
            <div className="movie-card" key={i}>
              <img
                className="image-card"
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
                alt={item.title}
              />
              
              <p><b>Title :</b> {item.title}</p>
              <p><b>ReleaseDate:</b> {item.release_date}</p>
              <p><b>Rating :</b> {item.vote_average}</p>
             
            </div>
          ))
        ) : (
          searchedMovies.map((item, i) => (
            <div className="movie-card" key={i}>
              <img
                className="image-card"
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
                alt={item.title}
              />
              <p><b>Title :</b> {item.title}</p>
              <p><b>ReleaseDate:</b>{item.release_date}</p>
              <p><b>Rating :</b> {item.vote_average}</p>
              
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default App;