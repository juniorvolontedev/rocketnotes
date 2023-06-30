import { Container, Links, Content } from './styles.js';
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Exluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            asperiores adipisci. Ad incidunt cupiditate nesciunt voluptatum
            eveniet accusamus, delectus iste fuga possimus quia? Obcaecati
            tempora dolore suscipit. Maiores, cum hic.
          </p>

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
        </Content>
      </main>
    </Container>
  );
}
