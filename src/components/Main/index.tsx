import { useMediaQuery } from 'react-responsive';

import { Header } from '../Header';
import { ProfileSection } from '../ProfileSection';
import { ProfileNavBar } from '../ProfileNavBar';
import { Tweet } from '../Tweet';
import { SideBar } from '../SideBar';

import { Container } from './style';

export function Main() {
  const isMinWidth500px = useMediaQuery({ query: '(min-width: 500px)' });

  return (
    <Container>
      {isMinWidth500px && <SideBar />}

      <div className="profile-container">
        <Header />
        <ProfileSection />
        <ProfileNavBar />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </Container>
  );
}
