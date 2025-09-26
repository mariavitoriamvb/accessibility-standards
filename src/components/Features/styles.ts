import styled from 'styled-components'

export const Section = styled.section`
  background: var(--surface-alt);
  border-top: 1px solid var(--border);
`

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 56px 16px;
`

export const Title = styled.h2`
  font-family: ${({theme}) => theme.typography.fontDisplay};
  font-size: ${({theme}) => theme.typography.scale['2xl']};
  margin: 0 0 8px;
`

export const Text = styled.p`
  color: var(--text);
  margin: 0 0 24px;
  max-width: 70ch;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 900px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px){
    grid-template-columns: 1fr;
  }
`

export const Card = styled.article`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: ${({theme}) => theme.radius.lg};
  padding: 16px;
  box-shadow: ${({theme}) => theme.shadow.sm};
  h3 { margin: 8px 0 4px; color: var(--accent); }
  p { margin: 0; color: var(--text); }
`

export const Icon = styled.div`
  font-size: 1.5rem;
`
