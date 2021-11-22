import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  align-items: center;

  border-radius: 9999px;

  background: var(--outline);

  .input-box {
    margin-left: 1rem;

    svg {
      fill: var(--gray);
    }

    input {
      outline: 0;
      border: 0;
      margin-left: 16px;

      ::placeholder {
        font-size: 15px;
        color: var(--gray);
        font-weight: 400;
      }
    }
  }
`;
