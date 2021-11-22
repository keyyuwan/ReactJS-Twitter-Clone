import { SearchBar } from '../SearchBar';
import { Panel } from '../Panel';

import { Container } from './style';

export function SideBar() {
  return (
    <Container>
      <SearchBar />

      <Panel />
    </Container>
  );
}
