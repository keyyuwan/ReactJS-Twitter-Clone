import styled from 'styled-components';

export const Container = styled.div`
  background: var(--secondary);
  border-radius: 16px;

  width: 100%;
  padding: 1rem;

  h2.title {
    font-weight: bold;
    font-size: 19px;
  }
`;

export const ProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 2rem;

  .profile {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    :first-child {
      margin-top: 0;
    }

    .profile-info {
      display: flex;
      align-items: center;

      img {
        width: 48px;
        height: 48px;

        border-radius: 50%;
      }

      .name-username {
        display: flex;
        flex-direction: column;
        margin-left: 8px;

        h2.name,
        span.username {
          font-size: 14px;
        }

        span.username {
          color: var(--gray);
        }
      }
    }

    button {
      margin-left: 16px;
      height: 30px;
      border-radius: 9999px;

      color: var(--primary);
      background: var(--white);

      font-weight: bold;
      padding: 0 1rem;
    }
  }
`;
