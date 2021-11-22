import { ReactNode } from 'react';
import { Container } from './style';

type PanelProps = {
  title: string;
  children: ReactNode;
};

export function Panel({ title, children }: PanelProps) {
  return (
    <Container>
      <h2 className="title">{title}</h2>
      {children}
    </Container>
  );
}
