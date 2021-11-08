import { BackgroundPhoto, Content } from './style';
import { Location } from '@styled-icons/evil';
import { Calendar } from '@styled-icons/evil';

export function ProfileSection() {
  return (
    <>
      <BackgroundPhoto />

      <Content>
        <div className="avatar-container">
          <img src="https://github.com/keyyuwan.png" alt="Key Yu Wan" />

          <button>Edit profile</button>
        </div>

        <div className="profile-info">
          <div className="wrapper">
            <h1>Key Yu Wan</h1>
            <span className="username">@keyyuwwan</span>
          </div>

          <p>Front-End Developer</p>

          <div className="wrapper">
            <div>
              <Location width="24px" height="24px" />
              <span>Curitiba, Brazil</span>
            </div>
            <div>
              <Calendar width="24px" height="24px" />
              <span>Joined May 2019</span>
            </div>
          </div>

          <div className="followers-container">
            <div>
              <strong>130</strong> Following
            </div>
            <div>
              <strong>280</strong> Followers
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
