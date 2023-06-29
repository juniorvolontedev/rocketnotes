import { Container, Profile } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/juniorvolontedev.png"
          alt="Foto do Usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Rodrigo Gonçalves</strong>
        </div>
      </Profile>
    </Container>
  );
}
