import { Search } from '@styled-icons/bootstrap';
import { Container } from './style';

export function SearchBar() {
  return (
    <Container>
      <div className="input-box">
        <Search width={20} />
        <input placeholder="Search Twitter" />
      </div>
    </Container>
  );
}
