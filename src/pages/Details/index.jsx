import { Container, Links } from './styles.js';
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links Úteis">
        <Links>
          <li>
            <a href="#">https://rocketseat.com.br</a>
          </li>
        </Links>
      </Section>
      <Button title="Voltar" />
    </Container>
  );
}
