import { Container, Wrapper, ArrowBackIcon } from './style';

export function Header() {
  return (
    <Container>
      <Wrapper>
        <ArrowBackIcon />

        <div className="wrapper">
          <h1>Key Yu Wan</h1>
          <span>346 Tweets</span>
        </div>
      </Wrapper>
    </Container>
  );
}
