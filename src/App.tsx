import { SkipLink } from './components/SkipLink'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { AccessibilityInfo } from './components/AccessibilityInfo'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { AccessibilityControls } from './components/AccessibilityControls'
import styled from 'styled-components'

const Main = styled.main`
  display: block;
`

export default function App(){
  return (
    <>
      <SkipLink targetId="conteudo-principal">Pular para o conteúdo</SkipLink>
      <Header />
      <AccessibilityControls />
      <Main id="conteudo-principal">
        <Hero />
        <Features />
        <AccessibilityInfo />
        <FAQ />

      </Main>
      <Footer />
    </>
  )
}
