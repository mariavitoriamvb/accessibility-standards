import styled from 'styled-components'

export const SkipLinkAnchor = styled.a`
  position: absolute;
  top: -100px;
  left: 16px;
  background: ${({theme}) => theme.colors.green700};
  color: ${({theme}) => theme.colors.white};
  padding: 8px 12px;
  border-radius: ${({theme}) => theme.radius.sm};
  box-shadow: ${({theme}) => theme.shadow.sm};
  z-index: 1000;
  &:focus {
    top: 12px;
  }
`
