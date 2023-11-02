import react from 'react';

// Ce composant représente le résultat de la recherche
const Movies = ({movies}) => {
  //Lien IMDB
  const imdb = 'https://imdb.com/title/';

  return (
    <div className='movies'>
{movies.map(Movie) => (
  <div className='movie' key={movie.imdbID}>
    <div className='movie-info'>
      <img 
      src={
        movie.Poster !== "N/A" ?
        movie.Poster : "https://placehold.co/300x450/000000/FFF?text=Non+disponible"
      } 
        alt={movie.title}/>
      <h3>{movie.title}</h3>
      <p>
        Voir les détails {""}
        <a href={imdb + movie.imdbID} target="_blank">
          IMDB
</a>
</p>
</div>
</div>
))}
  </div>