import { fetchMovieCredits } from 'components/api.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CastList } from './styledCast';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState(null);
  
  useEffect(() => {
    const fetchDataCredits = async () => {
      
      try {
        const movieCredits = await fetchMovieCredits(id);
        setCredits(movieCredits);
      } catch (error) {
        console.error('error', error);
      }
    };
    fetchDataCredits();
  }, [id]);

  
  if (!credits) {
      return <p>Loading...</p>;
    }
    const filteredCredits = credits.filter((credit) => credit.profile_path !== null);
  return (
      
      <CastList>
        {filteredCredits.map(({ id, name, profile_path, character, original_name }) => (
          <div key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            />
            <p>Name:{original_name}</p>
            <p>Role: {character}</p>
          </div>
        ))}
      </CastList>
    );

};
export default Cast;