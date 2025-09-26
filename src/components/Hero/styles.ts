import styled, { keyframes } from 'styled-components'

const float = keyframes`
  from { transform: translateY(0) }
  to   { transform: translateY(-8px) }
`

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
  padding: 64px 16px;
  gap: 24px;
  @media (max-width: 900px){
    grid-template-columns: 1fr;
  }
`

export const Content = styled.div``

export const Title = styled.h1`
  font-family: ${({theme}) => theme.typography.fontDisplay};
  color: var(--accent);
  font-size: clamp(2rem, 4vw + 1rem, 3rem);
  line-height: 1.1;
  margin: 0 0 12px;
`

export const Subtitle = styled.p`
  font-size: ${({theme}) => theme.typography.scale.md};
  color: var(--text);
  margin: 0 0 24px;
`

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

const ButtonBase = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: ${({theme}) => theme.radius.pill};
  text-decoration: none;
  font-weight: 700;
`

export const PrimaryBtn = styled(ButtonBase)`
  background: var(--primary);
  color: #fff;
  box-shadow: ${({theme}) => theme.shadow.md};
  &:hover { background: var(--primary-strong); }
`

export const SecondaryBtn = styled(ButtonBase)`
  background: ${({theme}) => theme.colors.cream200};
  color: var(--accent);
  &:hover { background: ${({theme}) => theme.colors.cream300}; }
`

export const Illustration = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: ${({theme}) => theme.radius.lg};
  background: radial-gradient(80% 60% at 70% 30%, ${({theme}) => theme.colors.green400}, transparent),
              linear-gradient(135deg, ${({theme}) => theme.colors.cream100}, ${({theme}) => theme.colors.cream300});
  border: 1px solid ${({theme}) => theme.colors.cream200};
  animation: ${float} 3s ease-in-out infinite alternate;
  @media (prefers-reduced-motion: reduce){
    animation: none;
  }
`
