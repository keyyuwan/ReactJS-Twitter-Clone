import { Container, Button, BlueBorder } from './style';

type NavButtonProps = {
  title: string;
  id: number;
  active: boolean;
  handleNavigateBetweenButtons: (id: number) => void;
};

export function NavButton({
  title,
  id,
  active = false,
  handleNavigateBetweenButtons,
}: NavButtonProps) {
  return (
    <Container onClick={() => handleNavigateBetweenButtons(id)}>
      <Button active={active}>{title}</Button>
      {active && <BlueBorder />}
    </Container>
  );
}
