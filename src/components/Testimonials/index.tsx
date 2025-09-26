import { Section, Container, Item, Quote, Author, Title } from './styles'

const data = [
  { q: 'A página é rápida, clara e funciona no teclado.', a: 'Ana — UX Designer' },
  { q: 'Adorei o contraste e a navegação simples.', a: 'Bruno — Engenheiro Frontend' },
  { q: 'Leve e acessível em qualquer dispositivo.', a: 'Carla — PM' },
]

export function Testimonials(){
  return (
    <Section id="testimonials" aria-labelledby="testimonials-title">
      <Container>
        <Title id="testimonials-title">O que dizem</Title>
        {data.map((d, i) => (
          <Item key={i} aria-label={`Depoimento ${i+1}`}>
            <Quote>“{d.q}”</Quote>
            <Author>— {d.a}</Author>
          </Item>
        ))}
      </Container>
    </Section>
  )
}
