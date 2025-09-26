import styled from 'styled-components'

export const Bar = styled.div`
  position: sticky;
  top: var(--nav-h);
  z-index: 900;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: var(--surface-alt);
  border-bottom: 1px dashed var(--border);
  font-size: calc(1rem * var(--font-scale, 1));
`

export const Group = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

export const Label = styled.span`
  font-weight: 600;
`

export const Button = styled.button`
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  padding: 6px 10px;
  border-radius: ${({theme}) => theme.radius.pill};
  cursor: pointer;
  &[aria-pressed="true"] {
    background: var(--primary);
    color: #fff;
    border-color: var(--primary);
  }
`
