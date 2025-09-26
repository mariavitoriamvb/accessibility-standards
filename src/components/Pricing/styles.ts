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
  margin: 0 0 16px;
`

export const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 900px){
    grid-template-columns: 1fr;
  }
`

export const Card = styled.article`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: ${({theme}) => theme.radius.lg};
  padding: 16px;
  box-shadow: ${({theme}) => theme.shadow.sm};
  h3 { margin: 0 0 8px; color: var(--accent); }
`

export const Price = styled.div`
  font-size: ${({theme}) => theme.typography.scale['2xl']};
  font-weight: 900;
  color: var(--accent);
  margin-bottom: 8px;
`

export const Feature = styled.li`
  margin: 6px 0;
  color: var(--text);
`

export const Button = styled.a`
  display: inline-flex; align-items: center; justify-content: center;
  text-decoration: none;
  margin-top: 12px;
  padding: 10px 14px;
  border-radius: ${({theme}) => theme.radius.pill};
  background: var(--primary);
  color: #fff;
  &:hover { background: var(--primary-strong); }
`
