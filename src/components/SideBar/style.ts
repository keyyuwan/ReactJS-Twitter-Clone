import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 450px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  padding: 0 2rem 4rem 1rem;
`;

export const PanelContentContainer = styled.div`
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

  .event {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    :first-child {
      margin-top: 0;
    }

    span {
      color: var(--gray);
      font-size: 13px;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 4px;

      .dot {
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: var(--gray);
      }
    }

    h3.title {
      font-size: 15px;
    }
  }
`;
