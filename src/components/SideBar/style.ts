import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 0;
  margin-right: 16px;
  height: 100vh;
  width: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.75rem;

    .tweet-icon-box {
      background-color: var(--twitter);
      border-radius: 50%;
      padding: 0.75rem;
    }
  }

  img.avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;
