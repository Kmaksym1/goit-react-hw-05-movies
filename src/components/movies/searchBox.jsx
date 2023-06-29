import styled from 'styled-components';

const SearchContainer = styled.form`

  display: flex;
  align-items: center;
  width: 1400px;
  margin: 30px auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 30px;
  border: none;
  border-radius: 4px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(34, 34, 34, 0.1);
  flex-grow: 1;
  color: #333;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 30px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 4px;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #23527c;
  }
`;

const SearchBox = ({ handleSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    handleSubmit(form.elements.query.value);
    form.reset();
  };

  return (
    <SearchContainer onSubmit={onSubmit}>
      <Input type="text" name="query" placeholder="Search..." />
      <Button type="submit">Search</Button>
    </SearchContainer>
  );
};

export default SearchBox;
