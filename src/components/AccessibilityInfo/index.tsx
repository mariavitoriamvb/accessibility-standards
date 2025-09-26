import { Section, Container, Title, Sub, Grid, Card } from './styles'

const heuristics = [
  'Visibilidade do status do sistema',
  'Compatibilidade com o mundo real',
  'Controle e liberdade do usuário',
  'Consistência e padrões',
  'Prevenção de erros',
  'Reconhecimento em vez de memorização',
  'Flexibilidade e eficiência de uso',
  'Estética e design minimalista',
  'Ajudar a reconhecer, diagnosticar e recuperar de erros',
  'Ajuda e documentação'
]

export function AccessibilityInfo(){
  return (
    <Section id="a11y" aria-labelledby="a11y-title">
      <Container>
        <Title id="a11y-title">Acessibilidade (WCAG) & Heurísticas</Title>
        <Sub>**WCAG — POUR** (Perceptível, Operável, Compreensível e Robusta) aplicado na prática nesta página.</Sub>
        <Grid>
          <Card>
            <h3>Perceptível</h3>
            <p>Contraste adequado, tipografia legível, imagens com rótulos/ARIA quando necessário.</p>
          </Card>
          <Card>
            <h3>Operável</h3>
            <p>Navegação por teclado, foco evidente, skip link, tempo suficiente para ações.</p>
          </Card>
          <Card>
            <h3>Compreensível</h3>
            <p>Conteúdo claro, validações com mensagens úteis e linguagem consistente.</p>
          </Card>
          <Card>
            <h3>Robusta</h3>
            <p>HTML semântico e compatível com tecnologias assistivas modernas.</p>
          </Card>
        </Grid>

        <Title as="h2" id="heur-title">10 Heurísticas de Usabilidade</Title>
        <Grid>
          {heuristics.map((h, i) => (
            <Card key={i}><h3>{i+1}. {h}</h3><p>Demonstrada nesta landing (veja seções e interações).</p></Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
