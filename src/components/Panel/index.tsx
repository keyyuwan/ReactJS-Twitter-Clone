import { profiles } from '../../utils/profiles';
import { Container, ProfilesContainer } from './style';

export function Panel() {
  return (
    <Container>
      <h2 className="title">You might like</h2>

      <ProfilesContainer>
        {profiles.map((profile) => (
          <div className="profile">
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
      </ProfilesContainer>
    </Container>
  );
}
