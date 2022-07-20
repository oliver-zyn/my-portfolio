import { GithubLogo, Globe } from "phosphor-react";
import { ContainerProject } from "./styles";

interface ProjectProps {
  srcImg?: string;
  repositoryLink?: string;
  siteLink?: string;
}

export function Project({ srcImg, repositoryLink, siteLink }: ProjectProps) {
  return (
    <ContainerProject>
      <div>
        <header>
          <span></span>
          <span></span>
          <span></span>
        </header>
        {srcImg ? (
          <div className="have-project">
            <img src={srcImg} />
            <div>
              <div className="links-project">
                <a href={repositoryLink} title="Github" target="_blank">
                  <GithubLogo size={20} />
                </a>
                <a
                  href={siteLink}
                  title="Demo"
                  target="_blank"
                  className={!siteLink ? "link-disabled" : ""}
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading-project">
            <p>Em breve...</p>
            <div className="line-wobble"></div>
          </div>
        )}
      </div>
    </ContainerProject>
  );
}
