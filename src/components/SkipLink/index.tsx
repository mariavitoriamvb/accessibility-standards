import { SkipLinkAnchor } from './styles'

type Props = { targetId: string; children: React.ReactNode }
export function SkipLink({ targetId, children }: Props){
  return <SkipLinkAnchor href={`#${targetId}`}>{children}</SkipLinkAnchor>
}
