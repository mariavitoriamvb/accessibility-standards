import styled from 'styled-components'

export const Section = styled.section`
  background: ${({theme}) => theme.colors.cream100};
  border-top: 1px solid var(--border);
`

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 56px 16px;
`

export const Title = styled.h2`
  font-family: ${({theme}) => theme.typography.fontDisplay};
  color: var(--accent);
  margin: 0 0 12px;
`

export const Sub = styled.p`
  margin: 0 0 16px;
  color: var(--text);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  @media (max-width: 1000px){ grid-template-columns: repeat(2,1fr); }
  @media (max-width: 600px){ grid-template-columns: 1fr; }
`

export const Card = styled.article`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: ${({theme}) => theme.radius.lg};
  padding: 16px;
  box-shadow: ${({theme}) => theme.shadow.sm};
  h3 { margin: 0 0 6px; color: var(--accent); }
  p { margin: 0; color: var(--text); }
`
