import styled from 'styled-components';
import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';

export const Container = styled.div`
  height: 47px;
  width: 100%;

  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  margin-left: 24px;

  .wrapper {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.1875rem;
      font-weight: 700;
    }

    span {
      font-size: 0.9375rem;
      font-weight: 400;
      color: var(--gray);
    }
  }

  @media (min-width: 500px) {
    .wrapper {
      h1 {
        font-size: 1.25rem;
      }
    }
  }
`;

export const ArrowBackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 16px;
`;
