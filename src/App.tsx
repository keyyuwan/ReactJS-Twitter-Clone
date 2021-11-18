import { Header } from './components/Header';
import { ProfileSection } from './components/ProfileSection';
import { ProfileNavBar } from './components/ProfileNavBar';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <ProfileSection />
      <ProfileNavBar />
    </>
  );
}

export default App;
