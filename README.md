# Landing Verde & Creme (React + TS + styled-components)

Uma landing page básica porém **exemplar em usabilidade, acessibilidade e responsividade**.

## Tecnologias
- React 18 + TypeScript
- Vite
- styled-components 6 (arquitetura por componente: `index.tsx` + `styles.ts`)

## Como rodar
```bash
npm i
npm run dev
```

## Paleta de cores (verdes e cremes)
- `green900` `#0F3D2E` — títulos, rodapé
- `green700` `#146551` — links ativos, foco
- `green600` `#1B7F5F` — botões primários
- `green500` `#2AA176` — realces e foco
- `green400` `#58B68B` — acentos
- `green100` `#DFF3E9` — fundos sutis

- `cream50`  `#FFFDF8` — fundo principal
- `cream100` `#FBF6EC`
- `cream200` `#F3E9D9` — bordas
- `cream300` `#E6D6BA` — hovers suaves

- `gray700`  `#2F3A3B` — texto
- `gray500`  `#5A6B6C` — texto secundário
- `gray300`  `#9FB0B1` — elementos desativados

## Tipografia
- **Títulos:** Merriweather 700/900
- **Texto/UI:** Inter 400/500/600/700
- **Tamanhos (rem):** 12, 14, 16, 18, 20, 24, 32, 40, 48
- **Altura de linha:** 1.6 texto, 1.1 títulos

## Espaçamento
Escala 4px: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80

## Acessibilidade
- HTML semântico e **landmarks** (nav/main/footer)
- **Skip link** visível ao foco
- **Foco** com `outline` de alto contraste
- Componentes **navegáveis por teclado**
- **ARIA** prudente (rotulações, `role=status`)
- **Validação de formulário** com mensagens claras
- **`prefers-reduced-motion`** respeitado
- **Controles de acessibilidade** (tamanho de fonte e contraste) persistidos

## Heurísticas de Nielsen — como foram contempladas
1. **Status do sistema:** indicadores de envio no formulário; `role="status"`.
2. **Compatível com o mundo real:** linguagem clara, seção de planos e FAQ.
3. **Controle e liberdade:** botão fechar menu (overlay), skip link, sem bloqueios.
4. **Consistência e padrões:** design system unificado (cores, tipografia, componentes).
5. **Prevenção de erro:** input com `type="email"`, `required`, dicas.
6. **Reconhecimento em vez de lembrança:** navegação sempre visível; seções nomeadas.
7. **Flexibilidade e eficiência:** atalhos de navegação, responsividade, controles A11y.
8. **Estética e design minimalista:** textos concisos, espaços amplos, contraste adequado.
9. **Ajudar a reconhecer e recuperar erros:** mensagens de erro específicas; estados inválidos.
10. **Ajuda e documentação:** FAQ embutido com perguntas objetivas.

## Estrutura
```
src/
  components/
    NomeDoComponente/
      index.tsx
      styles.ts
  styles/
    global.ts
    theme.ts
  utils/
    usePrefersReducedMotion.ts
  App.tsx
  main.tsx
```
