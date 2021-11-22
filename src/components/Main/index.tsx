import { useMediaQuery } from 'react-responsive';

import { Header } from '../Header';
import { ProfileSection } from '../ProfileSection';
import { ProfileNavBar } from '../ProfileNavBar';
import { Tweet } from '../Tweet';
import { MenuBar } from '../MenuBar';
import { SideBar } from '../SideBar';

import { Container } from './style';

export function Main() {
  const isMinWidth500px = useMediaQuery({ query: '(min-width: 500px)' });
  const isMinWidth1000px = useMediaQuery({ query: '(min-width: 1000px)' });

  return (
    <Container>
      {isMinWidth500px && <MenuBar />}

      <div className="profile-container">
        <Header />
        <ProfileSection />
        <ProfileNavBar />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>

      {isMinWidth1000px && <SideBar />}
    </Container>
  );
}
