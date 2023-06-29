import styled from '@emotion/styled';

export const CastList = styled.ul`
  width: 1400px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding-left: 0;

  list-style-type: none;

  overflow-x: scroll;
  font-size: 22px;

  li {
    display: block;
  }

  li:not(:last-child) {
    margin-right: 12px;
  }

  img {
    display: block;
    width: 200px;
    height: auto;
  }
`;
export const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;  
  overflow: auto;
`;
