import { Section, Container, Item, Q, A, Title, Details } from './styles'

const qs = [
  { q: 'Essa página é acessível?', a: 'Sim — contraste, teclado, skip link, labels e ARIA adequados foram considerados.' },
  { q: 'É responsiva?', a: 'Sim — layout fluido, grids adaptáveis e tipografia elástica.' },
  { q: 'Suporta redução de movimento?', a: 'Sim — respeita prefers-reduced-motion e oferece controles extras.' },
]

export function FAQ(){
  return (
    <Section id="faq" aria-labelledby="faq-title">
      <Container>
        <Title id="faq-title">Perguntas frequentes</Title>
        <div>
          {qs.map((item, idx) => (
            <Details key={idx}>
              <Q>{item.q}</Q>
              <A>{item.a}</A>
            </Details>
          ))}
        </div>
      </Container>
    </Section>
  )
}
