import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    border-radius: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 227px;
    height: 35px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 8px 0;
    color: black;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    border: 1px solid #ccc;
    transition: background-color 0.2s ease-in-out;
    justify-content: center;

  &:hover {
    color: #009cf6;
    background-color: #f7f7f7;
    border-color: #009cf6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const BackLink = ({ backLinkHref, children }) => {
  return (
    <StyledLink to={backLinkHref.current}>
      <HiArrowLeft size="40" />
      {children}
    </StyledLink>
  );
};
