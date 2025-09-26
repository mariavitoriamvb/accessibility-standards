import styled from 'styled-components'

export const Section = styled.section`
  background: ${({theme}) => theme.colors.cream100};
  border-top: 1px solid var(--border);
`

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 16px;
`

export const Title = styled.h2`
  font-family: ${({theme}) => theme.typography.fontDisplay};
  color: var(--accent);
  margin: 0 0 12px;
`

export const Form = styled.form``

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  @media (max-width: 600px){
    grid-template-columns: 1fr;
  }
`

export const Label = styled.label``

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: ${({theme}) => theme.radius.sm};
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  &:focus { border-color: var(--focus); }
  &[aria-invalid="true"] { border-color: ${({theme}) => theme.colors.red600}; }
`

export const Button = styled.button`
  padding: 10px 16px;
  border-radius: ${({theme}) => theme.radius.pill};
  border: 0;
  background: var(--primary);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  &:disabled { opacity: .7; cursor: progress; }
  &:hover:not(:disabled){ background: var(--primary-strong); }
`

export const Helper = styled.p`
  margin: 8px 0 0;
  color: var(--text-muted);
`

export const Status = styled.p`
  margin: 4px 0 0;
  min-height: 1.25rem;
  color: var(--info);
`
