import { useEffect, useState } from 'react'
import { Container, Nav, Logo, NavList, NavItem, NavLink, Burger, Overlay } from './styles'

const sections = [
  { id: 'hero', label: 'Início' },
  { id: 'features', label: 'Recursos' },
  { id: 'a11y', label: 'Acessibilidade' },
  { id: 'testimonials', label: 'Depoimentos' },
  { id: 'pricing', label: 'Planos' },
  { id: 'faq', label: 'Dúvidas' },
  { id: 'cta', label: 'Contato' },
]

export function Header(){
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach(sec => {
      const el = document.getElementById(sec.id)
      if(!el) return
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if(e.isIntersecting) setActive(sec.id) })
      }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 })
      io.observe(el)
      observers.push(io)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const close = () => setOpen(false)

  return (
    <Nav aria-label="Primária">
      <Container>
        <Logo href="#hero">Verde&Creme</Logo>
        <Burger aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(v=>!v)} aria-controls="menu-principal">
          ☰
        </Burger>
        <Overlay $open={open} onClick={close} aria-hidden={!open} />
        <NavList id="menu-principal" $open={open} role="menubar">
          {sections.map(s => (
            <NavItem key={s.id} role="none">
              <NavLink role="menuitem" data-active={active===s.id} href={`#${s.id}`} onClick={close}>
                {s.label}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </Container>
    </Nav>
  )
}
