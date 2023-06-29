import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Description = styled.div``;
export const Container = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  gap: 50px;
`;

export const MovieImage = styled.img`
  width: 80%;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const DescriptionText = styled.p`
  width: 803px;
  font-size: 40px;
  font-weight: 300;
  margin: 5px 0;
`;
export const GenresContainer = styled.h3`
  display: flex;
  gap: 20px;
  font-size: 60px;
  font-weight: 500;
  margin: 5px 0;
`;

export const Genres = styled.p`
  font-size: 40px;
  font-weight: 300;
  margin: 5px 0;
`;
export const MovieListLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #2fdefd;
    
  }

`;
