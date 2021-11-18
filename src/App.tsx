import { Header } from './components/Header';
import { ProfileSection } from './components/ProfileSection';
import { ProfileNavBar } from './components/ProfileNavBar';
import { Tweet } from './components/Tweet';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <ProfileSection />
      <ProfileNavBar />
      <Tweet />
      <Tweet />
      <Tweet />
    </>
  );
}

export default App;
