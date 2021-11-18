import { useState } from 'react';
import { NavButton } from './NavButton';
import { profileNavButtons } from '../../utils/profileNavButtons';
import { Container } from './style';

export function ProfileNavBar() {
  const [buttonSelectedId, setButtonSelectedId] = useState(1);

  function handleNavigateBetweenButtons(id: number) {
    setButtonSelectedId(id);
  }

  return (
    <Container>
      {profileNavButtons.map((button) => (
        <NavButton
          key={button.id}
          title={button.title}
          id={button.id}
          handleNavigateBetweenButtons={handleNavigateBetweenButtons}
          active={button.id === buttonSelectedId}
        />
      ))}
    </Container>
  );
}
