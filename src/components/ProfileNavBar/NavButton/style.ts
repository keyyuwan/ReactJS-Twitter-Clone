import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type ButtonProps = {
  active: boolean;
};

export const Button = styled.a<ButtonProps>`
  color: ${({ active }) => (active ? 'var(--white)' : 'var(--gray)')};
  font-size: 15px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  padding-bottom: 16px;
`;

export const BlueBorder = styled.div`
  height: 4px;
  width: 100%;

  background: var(--twitter);
  border-radius: 9999px;
`;
