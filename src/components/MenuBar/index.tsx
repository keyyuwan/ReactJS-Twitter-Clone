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
import { Container } from './style';

export function MenuBar() {
  return (
    <Container>
      <div className="icons">
        <Twitter width={30} />
        <House width={25} />
        <Search width={25} />
        <Bell width={25} />
        <Envelope width={25} />
        <Bookmark width={25} />
        <CardHeading width={25} />
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
