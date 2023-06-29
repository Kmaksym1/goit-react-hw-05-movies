import {
  Container,
  MovieImage,
  Description,
  Genres,
  GenresContainer,
  DescriptionText,
} from './styled';

export const MovieContainer = ({ movie }) => {
  if (movie === null) return;

  return (
    <Container>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <Description>
        <h3>
          {movie.original_title} ({movie.release_date.slice(0, 4)})
        </h3>
              <p>User Score: { Math.round(movie.vote_average *10)}%</p>
        <h3>
          Overview <br />
          <DescriptionText>{movie.overview}</DescriptionText>
        </h3>
        <h3>
          Genres
          <GenresContainer >
                      {movie.genres.map(item => {
              return <Genres  key={item.id}>{item.name}</Genres>;
            })}
          </GenresContainer>
        </h3>
          </Description>
    </Container>
  );
};
