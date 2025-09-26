import { Section, Container, Grid, Card, Icon, Title, Text } from './styles'

const items = [
  { t: 'Feedback visível', d: 'Estados claros de foco, loading e sucesso comunicam o que está acontecendo.', i: '🔔' },
  { t: 'Controle do usuário', d: 'Menu acessível, skip link e preferências de acessibilidade.', i: '🎛️' },
  { t: 'Consistência', d: 'Paleta, tipografia e espaçamento coerentes em toda a página.', i: '🧭' },
  { t: 'Prevenção de erro', d: 'Formulários com rótulos, validação e dicas úteis.', i: '🛡️' },
  { t: 'Reconhecimento', d: 'Navegação sempre visível e seções nomeadas.', i: '🧠' },
  { t: 'Ajuda', d: 'FAQ e textos explicativos para orientar decisões.', i: '💬' },
]

export function Features(){
  return (
    <Section id="features" aria-labelledby="features-title">
      <Container>
        <Title id="features-title">Feita para usabilidade exemplar</Title>
        <Text>Projetada inspirada nas heurísticas de Nielsen e nas diretrizes WCAG, com foco em resposta rápida e clareza.</Text>
        <Grid role="list">
          {items.map((it, idx) => (
            <Card key={idx} role="listitem">
              <Icon aria-hidden>{it.i}</Icon>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
