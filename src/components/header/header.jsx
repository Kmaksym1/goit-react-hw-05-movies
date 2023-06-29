import { StyledNav, StyledLink } from './styledHeader.jsx';

const Header = () => {
  return (
    
      <StyledNav>
        <StyledLink aria-current="page" to="/">
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
    
  );
};

export default Header;
