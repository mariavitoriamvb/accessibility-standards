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

export const Details = styled.details`
  border: 1px solid var(--border);
  border-radius: ${({theme}) => theme.radius.md};
  background: var(--surface);
  padding: 12px 16px;
  margin-bottom: 12px;
`

export const Q = styled.summary`
  font-weight: 700;
  cursor: pointer;
  color: var(--accent);
`

export const A = styled.p`
  margin: 8px 0 0;
  color: var(--text);
`
