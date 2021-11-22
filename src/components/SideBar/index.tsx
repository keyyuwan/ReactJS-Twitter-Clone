import { SearchBar } from '../SearchBar';
import { Panel } from '../Panel';

import { profiles } from '../../utils/profiles';
import { whatsHappening } from '../../utils/whatsHappening';

import { Container, PanelContentContainer } from './style';

export function SideBar() {
  function adjustNumberOfTweetsIfMany(tweets: number) {
    if (tweets >= 1000) {
      return `${tweets / 1000}K Tweets`;
    }
  }
  return (
    <Container>
      <SearchBar />

      <Panel title="You might like">
        <PanelContentContainer>
          {profiles.map((profile) => (
            <div key={profile.username} className="profile">
              <div className="profile-info">
                <img src={profile.img_url} alt={profile.name} />

                <div className="name-username">
                  <h2 className="name">{profile.name}</h2>
                  <span className="username">{profile.username}</span>
                </div>
              </div>

              <button>Follow</button>
            </div>
          ))}
        </PanelContentContainer>
      </Panel>

      <Panel title="What's happening">
        <PanelContentContainer>
          {whatsHappening.map((event) => (
            <div key={event.title} className="event">
              <div className="header">
                <span>{event.relatedTo}</span>
                <div className="dot" />
                {event.isTrending && <span>Trending</span>}
                {event.isLive && <span>LIVE</span>}
              </div>
              <h3 className="title">{event.title}</h3>
              <span>{adjustNumberOfTweetsIfMany(event.howManyTweets)}</span>
            </div>
          ))}
        </PanelContentContainer>
      </Panel>
    </Container>
  );
}
