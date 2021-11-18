import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  border-top: 1.5px solid var(--search);

  display: flex;
  align-items: flex-start;
  gap: 16px;

  img.avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-content {
      display: flex;
      align-items: center;
      gap: 4px;

      span {
        font-size: 15px;
      }

      .name {
        font-weight: bold;
      }

      .dot {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: var(--gray);
      }

      .username,
      .date {
        color: var(--gray);
      }
    }
  }

  .buttons {
    margin-top: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    fill: var(--gray);
  }
`;
