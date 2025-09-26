import { useEffect, useState } from 'react'
import { Bar, Group, Label, Button } from './styles'

type Prefs = { fontScale: number; highContrast: boolean; }
const KEY = 'a11y-prefs'

export function AccessibilityControls(){
  const [prefs, setPrefs] = useState<Prefs>(() => {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : { fontScale: 1, highContrast: false }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(prefs))
    const root = document.documentElement
    root.style.setProperty('--font-scale', String(prefs.fontScale))
    root.setAttribute('data-contrast', prefs.highContrast ? 'on' : 'off')
  }, [prefs])

  return (
    <Bar aria-label="Controles de acessibilidade">
      <Group>
        <Label>Tamanho da fonte</Label>
        <div role="group" aria-label="Tamanho da fonte">
          <Button onClick={() => setPrefs(p => ({...p, fontScale: Math.max(0.9, +(p.fontScale - 0.1).toFixed(1))}))} aria-label="Diminuir fonte">A-</Button>
          <Button onClick={() => setPrefs(p => ({...p, fontScale: 1}))} aria-label="Fonte padrão">A</Button>
          <Button onClick={() => setPrefs(p => ({...p, fontScale: Math.min(1.6, +(p.fontScale + 0.1).toFixed(1))}))} aria-label="Aumentar fonte">A+</Button>
        </div>
      </Group>
      <Group>
        <Label>Contraste</Label>
        <Button aria-pressed={prefs.highContrast} onClick={() => setPrefs(p => ({...p, highContrast: !p.highContrast}))}>
          {prefs.highContrast ? 'Alto' : 'Normal'}
        </Button>
      </Group>
    </Bar>
  )
}
