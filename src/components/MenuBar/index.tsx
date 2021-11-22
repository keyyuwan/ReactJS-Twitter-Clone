import {
  Twitter,
  House,
  Search,
  Bell,
  Envelope,
  Bookmark,
  CardHeading,
  Person,
  ThreeDots,
  Pen,
} from '@styled-icons/bootstrap';
import { useMediaQuery } from 'react-responsive';
import { Container } from './style';

export function MenuBar() {
  const isMinWidth1000px = useMediaQuery({ query: '(min-width: 1000px)' });
  const isMinWidth1280px = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <Container>
      <div className="icons">
        <Twitter width={30} />
        <House width={25} />
        {!isMinWidth1000px && <Search width={25} />}
        <Bell width={25} />
        <Envelope width={25} />
        {!isMinWidth1280px && <Bookmark width={25} />}
        {!isMinWidth1280px && <CardHeading width={25} />}
        <Person width={25} />
        <ThreeDots width={25} />

        <div className="tweet-icon-box">
          <Pen width={25} />
        </div>
      </div>
      <img
        src="https://github.com/keyyuwan.png"
        alt="Key Yu Wan"
        className="avatar"
      />
    </Container>
  );
}
