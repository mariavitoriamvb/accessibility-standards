import styled from 'styled-components'

export const Wrapper = styled.footer`
  background: var(--accent);
  color: var(--surface);
  padding: 24px 16px;
`

export const Columns = styled.div`
  max-width: 1120px;
  margin: 0 auto 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 700px){ grid-template-columns: 1fr; }
  a { color: var(--surface); }
`

export const Col = styled.div``

export const Small = styled.small`
  display: block;
  color: var(--surface);
  opacity: .9;
`
