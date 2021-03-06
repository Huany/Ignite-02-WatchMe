import { MovieCard } from './MovieCard';

import '../styles/content.scss';

interface contentProps{
  genre: string,
  movies: Array<{
    Title: string;
    Poster: string;
    Runtime: string;
    Ratings: Array<{
      Value: string;
    }>;
  }>;
}

export function Content(props:contentProps) {
  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.genre}</span></span>
        </header>

        <main>
          <div className="movies-list">
            
            {props.movies.map(movie => (
              <MovieCard 
                key={movie.Title}
                title={movie.Title} 
                poster={movie.Poster} 
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main> 
    </div>
  )
}