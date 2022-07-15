import { Lightning } from "phosphor-react";
import { ContainerSidebar, LinkNav } from "./styles";

export function Sidebar() {
  return (
    <ContainerSidebar>
      <header>
        <Lightning weight="duotone" size={90}/>
      </header>
      <nav>
        <LinkNav to="/" className={({isActive}) => isActive? "active": ''}>Home</LinkNav>
        <LinkNav to="/projects" className={({isActive}) => isActive? "active": ''}>Projetos</LinkNav>
        <LinkNav to="/skills" className={({isActive}) => isActive? "active": ''}>Skills</LinkNav>
        <LinkNav to="/about" className={({isActive}) => isActive? "active": ''}>Sobre</LinkNav>
        <LinkNav to="/contact" className={({isActive}) => isActive? "active": ''}>Contato</LinkNav>
      </nav>
    </ContainerSidebar>
  );
}
