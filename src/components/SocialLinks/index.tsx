import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

import { SocialLinksContainer } from './styles'

export function SocialLinks() {
  return (
    <SocialLinksContainer>
      <div>
        <a
          href="https://github.com/oliver-zyn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/oliverzyn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo size={30} />
        </a>
        <a
          href="https://www.instagram.com/oliverzyn_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo size={30} />
        </a>
      </div>
    </SocialLinksContainer>
  )
}
