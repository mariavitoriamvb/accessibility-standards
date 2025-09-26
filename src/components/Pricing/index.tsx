import { Section, Container, Grid, Card, Price, Title, Feature, Button } from './styles'

const plans = [
  { name: 'Básico', price: 'R$ 0', features: ['Responsivo', 'A11y essencial', 'Suporte comunitário'] },
  { name: 'Pro', price: 'R$ 49/mês', features: ['Tudo do Básico', 'Componentes extras', 'Suporte prioritário'] },
  { name: 'Empresa', price: 'Sob consulta', features: ['SLAs', 'Treinamento', 'Consultoria UX'] },
]

export function Pricing(){
  return (
    <Section id="pricing" aria-labelledby="pricing-title">
      <Container>
        <Title id="pricing-title">Planos transparentes</Title>
        <Grid role="list">
          {plans.map((p, i) => (
            <Card key={i} role="listitem" aria-label={`Plano ${p.name}`}>
              <h3>{p.name}</h3>
              <Price>{p.price}</Price>
              <ul>
                {p.features.map((f, idx) => <Feature key={idx}>{f}</Feature>)}
              </ul>
              <Button href="#cta">Escolher</Button>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
