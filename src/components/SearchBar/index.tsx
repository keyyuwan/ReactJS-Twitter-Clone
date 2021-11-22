import { Search } from '@styled-icons/bootstrap';
import { Container, SearchBarBox } from './style';

export function SearchBar() {
  return (
    <Container>
      <SearchBarBox>
        <div className="input-box">
          <Search width={20} />
          <input placeholder="Search Twitter" />
        </div>
      </SearchBarBox>
    </Container>
  );
}
