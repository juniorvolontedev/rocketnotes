import { Container, Links } from './styles.js';
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
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

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>
      <Button title="Voltar" />
    </Container>
  );
}
