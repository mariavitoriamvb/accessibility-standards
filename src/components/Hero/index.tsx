import { Wrapper, Content, Title, Subtitle, Actions, PrimaryBtn, SecondaryBtn, Illustration } from './styles'

export function Hero(){
  return (
    <Wrapper id="hero" aria-labelledby="hero-title">
      <Content>
        <Title id="hero-title">Plante ideias. Colha resultados.</Title>
        <Subtitle>Uma landing page exemplo — acessível, responsiva e pensada nos 10 princípios heurísticos.</Subtitle>
        <Actions>
          <SecondaryBtn href="#features">Conhecer recursos</SecondaryBtn>
        </Actions>
      </Content>
      <Illustration role="img" aria-label="Folhagem estilizada em tons de verde" />
    </Wrapper>
  )
}
