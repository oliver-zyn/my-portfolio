import { useNavigate } from "react-router-dom";
import { Letter } from "../../components/Letter";
import { ContainerHome } from "./styles";

export function Home() {
  const arrayOliverzyn = ["O", "l", "i", "v", "e", "r", "z", "y", "n", "."];
  const arrayFrontEndDeveloper = [
    "F",
    "r",
    "o",
    "n",
    "t",
    "E",
    "n",
    "d ",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  const navigate = useNavigate()

  return (
    <ContainerHome>
      <div>
        <div className="title-home">
          <span>Olá, eu sou o</span>
          <h1>
            {arrayOliverzyn.map((letter, index) => {
              return <Letter key={index}>{letter}</Letter>;
            })}
          </h1>
          <span>
            {arrayFrontEndDeveloper.map((letter, index) => {
              return <Letter key={index}>{letter}</Letter>;
            })}
          </span>
        </div>
        <button
          className="button-home"
          onClick={() => navigate("/projects")}
        >
          Meus Projetos
        </button>
      </div>
    </ContainerHome>
  );
}
