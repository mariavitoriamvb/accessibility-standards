import styled from 'styled-components'

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
`

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 12px 16px;
  min-height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Logo = styled.a`
  font-family: ${({theme}) => theme.typography.fontDisplay};
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--accent);
  text-decoration: none;
`

export const Burger = styled.button`
  display: none;
  @media (max-width: 800px){
    display: inline-flex;
    font-size: 1.5rem;
    background: transparent;
    border: 0;
    cursor: pointer;
    color: var(--text);
  }
`

export const Overlay = styled.button<{ $open:boolean }>`
  display: ${({$open}) => $open ? 'block' : 'none'};
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.3);
  border: 0;
`

export const NavList = styled.ul<{ $open:boolean }>`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  @media (max-width: 800px){
    position: fixed;
    top: var(--nav-h); right: 0; bottom: 0;
    width: min(80vw, 320px);
    background: var(--surface);
    border-left: 1px solid var(--border);
    box-shadow: ${({theme}) => theme.shadow.md};
    padding: 24px;
    flex-direction: column;
    transform: translateX(${({$open}) => $open ? '0' : '100%'});
    transition: transform .2s ease;
  }
`

export const NavItem = styled.li``

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
  &[data-active="true"] {
    color: var(--accent);
    border-bottom: 2px solid var(--primary);
  }
  &:hover { color: var(--primary-strong); }
`
