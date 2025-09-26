import { Section, Container, Title, Form, Row, Label, Input, Button, Helper, Status } from './styles'
import { useState } from 'react'

export function CTA(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    setStatus('loading')
    await new Promise(r => setTimeout(r, 900))
    if(email.includes('@')) setStatus('success')
    else setStatus('error')
  }

  return (
    <Section id="cta" aria-labelledby="cta-title">
      <Container>
        <Title id="cta-title">Receba novidades</Title>
        <Form onSubmit={onSubmit} aria-describedby="cta-helper cta-status" noValidate>
          <Row>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" required placeholder="voce@exemplo.com" 
              value={email} onChange={e=>setEmail(e.target.value)} aria-invalid={status==='error'} />
            <Button type="submit" disabled={status==='loading'}>
              {status==='loading' ? 'Enviando…' : 'Assinar'}
            </Button>
          </Row>
          <Helper id="cta-helper">Seu e-mail só será usado para enviar novidades. Você pode cancelar a qualquer momento.</Helper>
          <Status id="cta-status" role="status" aria-live="polite">
            {status==='success' && 'Tudo certo! Verifique sua caixa de entrada.'}
            {status==='error' && 'Ops! Digite um e-mail válido.'}
          </Status>
        </Form>
      </Container>
    </Section>
  )
}
