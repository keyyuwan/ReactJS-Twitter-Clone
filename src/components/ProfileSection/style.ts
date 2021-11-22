import styled from 'styled-components';

export const BackgroundPhoto = styled.div`
  height: 199px;
  background: var(--twitter);
  margin-top: 8px;
`;

export const Content = styled.div`
  padding: 0 16px;

  .avatar-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    margin-top: -80px;

    button {
      cursor: pointer;
      transition: filter 200ms;

      :hover {
        filter: brightness(0.85);
      }
    }

    img {
      width: 135px;
      height: 135px;

      background: var(--primary);
      border: 3px solid var(--primary);
      border-radius: 50%;
    }

    button {
      height: 40px;
      width: 118px;

      border: 1px solid var(--white);
      border-radius: 9999px;

      font-size: 16px;
      font-weight: 700;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    gap: 12px;

    h1 {
      font-size: 1.1875rem;
      font-weight: 700;
    }

    span {
      color: var(--gray);
    }

    .username {
      font-size: 1rem;
      font-weight: 400;
    }

    svg {
      fill: var(--gray);
      margin-right: 5px;
    }

    .followers-container {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
`;
