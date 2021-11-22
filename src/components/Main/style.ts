import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 500px) {
    padding: 0 0 0 7%;

    display: flex;
    align-items: flex-start;

    .profile-container {
      width: 100%;
      border-left: 1.5px solid var(--search);
      border-right: 1.5px solid var(--search);
    }
  }
`;
