import { Project } from "../../components/Project";
import { ContainerProjects } from "./styles";

import { useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";

import feednacImg from "../../assets/feednacImg.png";
import skalImg from "../../assets/skalImg.png";
import feedgetImg from "../../assets/feedgetImg.png";
import todolistImg from "../../assets/todolistImg.png"
import memorygameImg from "../../assets/memorygameImg.png"
import reactiontimeImg from "../../assets/reactiontimeImg.png"
import cantinasenacImg from "../../assets/cantinasenacImg.png"
import portfolioImg from "../../assets/portfolioImg.png"

const projectsPages = [
  {
    page: 1,
    srcImg: feednacImg,
    repositoryLink: "https://github.com/oliver-zyn/feednac_2.0",
    siteLink: "https://feednac.netlify.app/"
  },
  {
    page: 1,
    srcImg: skalImg,
    repositoryLink: "https://github.com/oliver-zyn/skal",
    siteLink: "https://skal-lading.netlify.app/"  
  },
  {
    page: 1,
    srcImg: feedgetImg,
    repositoryLink: "https://github.com/oliver-zyn/nlw-feedget",
    siteLink: "https://feedget-nlw.netlify.app/"  
  },
  {
    page: 1,
    srcImg: todolistImg,
    repositoryLink: "https://github.com/oliver-zyn/todo-list",
    siteLink: "https://todo-list-oliverzyn.netlify.app/" 
  },
  {
    page: 1,
    srcImg: portfolioImg,
    repositoryLink: "https://github.com/oliver-zyn/portfolio",
    siteLink: "https://oliver-zyn.github.io/portfolio/" 
  },
  {
    page: 1,
    srcImg: cantinasenacImg,
    repositoryLink: "https://github.com/oliver-zyn/projeto-cantina",
    siteLink: "https://oliver-zyn.github.io/projeto-cantina/" 
  },
  {
    page: 2,
    srcImg: reactiontimeImg,
    repositoryLink: "https://github.com/oliver-zyn/reaction-time",
    siteLink: "https://time-reaction.netlify.app/" 
  },
  {
    page: 2,
    srcImg: memorygameImg,
    repositoryLink: "https://github.com/oliver-zyn/jogo-memoria",
    siteLink: "https://oliver-zyn.github.io/jogo-memoria/" 
  },
  {
    page: 2,
  },
  {
    page: 2,
  },
  {
    page: 2,
  },
  {
    page: 2,
  }
]

export function Projects() {
  const [numberPage, setNumberPage] = useState(1);

  return (
    <ContainerProjects>
      <h1>Meus projetos</h1>

      <div className="projects">
        {
          projectsPages.map((item, index) => {
            if (item.page === numberPage) {
              return (
                <Project srcImg={item.srcImg} repositoryLink={item.repositoryLink} siteLink={item.siteLink} key={index} />
              )
            }
          })
        }
      </div>
      
      {numberPage !== 1 ? (
      <div className="back">
        <button onClick={() => setNumberPage((state) => state - 1)} className="page-button">
          <ArrowCircleLeft size={25} weight="duotone" />
          Anterior
        </button>
      </div>
      ) : (
        <div className="next">
          <button onClick={() => setNumberPage((state) => state + 1)} className="page-button">
            Próximo
            <ArrowCircleRight size={25} weight="duotone" />
          </button>
        </div>
      )}
    </ContainerProjects>
  );
}
