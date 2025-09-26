import { Wrapper, Columns, Col, Small } from './styles'

export function Footer(){
  return (
    <Wrapper role="contentinfo">
      <Columns>
        <Col>
          <strong>Verde&Creme</strong>
          <Small>Exemplo educacional de landing page acessível.</Small>
        </Col>
        <Col>
          <nav aria-label="Rodapé">
            <ul>
              <li><a href="#features">Recursos</a></li>
              <li><a href="#pricing">Planos</a></li>
              <li><a href="#faq">Dúvidas</a></li>
            </ul>
          </nav>
        </Col>
      </Columns>
      <Small>© 2025. Feito com ♥ em React + TypeScript + styled-components.</Small>
    </Wrapper>
  )
}
