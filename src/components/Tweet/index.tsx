import { Container, Content } from './style';
import { ThreeDots, Chat, Heart, Share } from '@styled-icons/bootstrap';
import { Retweet } from '@styled-icons/evil';
import { StatsBars } from '@styled-icons/icomoon';

export function Tweet() {
  return (
    <Container>
      <img
        src="https://github.com/keyyuwan.png"
        alt="Key Yu Wan"
        className="avatar"
      />

      <Content>
        <div className="header">
          <div className="header-content">
            <span className="name">Key Yu Wan</span>
            <span className="username">@keyyuwan</span>
            <div className="dot" />
            <span className="date">Jul 4</span>
          </div>

          <ThreeDots width={20} />
        </div>

        <p>Trabalho com ReactJS e TypeScript :)</p>

        <div className="buttons">
          <Chat width={18} />
          <Retweet width={28} />
          <Heart width={18} />
          <Share width={18} />
          <StatsBars width={18} />
        </div>
      </Content>
    </Container>
  );
}
