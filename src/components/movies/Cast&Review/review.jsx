import { fetchMovieReviews } from 'components/api.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Text } from './styledCast';

export const Review = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchDataReview = async () => {
      try {
        const movieReview = await fetchMovieReviews(id);
        setReview(movieReview);
      } catch (error) {
        console.error('error', error);
      }
    };
    fetchDataReview();
  }, [id]);

  if (!review) {
    return <p>Loading...</p>;
  }

  return !review ? (
    <ul>
      {review.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <Text>{content}</Text>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
};
export default Review;
