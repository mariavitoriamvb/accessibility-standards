import styled from 'styled-components'

export const Section = styled.section`
  background: var(--bg);
`

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 16px;
`

export const Title = styled.h2`
  font-family: ${({theme}) => theme.typography.fontDisplay};
  margin: 0 0 16px;
`

export const Item = styled.blockquote`
  margin: 0 0 20px;
  border-left: 4px solid var(--primary);
  background: var(--surface);
  border-radius: ${({theme}) => theme.radius.md};
  box-shadow: ${({theme}) => theme.shadow.sm};
  padding: 12px 16px;
`

export const Quote = styled.p`
  margin: 0 0 8px;
  color: var(--text);
`

export const Author = styled.cite`
  font-style: normal;
  color: var(--text-muted);
`
