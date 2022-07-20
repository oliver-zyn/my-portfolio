import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";
import { ContainerSocialLinks } from "./styles";

export function SocialLinks() {
  return (
    <ContainerSocialLinks>
      <div className="social">
        <a href="https://www.instagram.com/oliverzyn.dev/" target="_blank">
          <InstagramLogo size={27} />
        </a>
        <a href="https://github.com/oliver-zyn" target="_blank">
          <GithubLogo size={27} />
        </a>
        <a href="https://www.linkedin.com/in/oliver-lohann-mayer-61ab3b215" target="_blank"> 
          <LinkedinLogo size={27} />
        </a>
        <a href="mailto:olivermayer15@gmail.com" target="_blank">
          <EnvelopeSimple size={27} />
        </a>
        <span className="line-social"></span>
      </div>
    </ContainerSocialLinks>
  );
}
