import { styled } from 'styled-components'

export const ProjectsContainer = styled.section`
  width: 100%;
  margin-top: 7rem;
`

export const BodyProjects = styled.div`
  div.project-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 3rem;
    gap: 1rem;
    background: rgba(24, 24, 26, 0.3);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(66, 211, 255, 0.1);
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0;
      background: transparent;
      border: none;
      backdrop-filter: none;
    }
  }

  div.project-list {
    display: grid;
    justify-items: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(321px, 1fr));
    margin-top: 3rem;
  }
`

export const FilterToggleButton = styled.button<{ $isExpanded: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.5rem 1.8rem;
    background: rgba(24, 24, 26, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(66, 211, 255, 0.3);
    border-radius: 12px;
    color: ${(props) => props.theme['text-base']};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: ${(props) => (props.$isExpanded ? '0.5rem' : '0')};

    &:hover {
      border-color: ${(props) => props.theme['light-blue']};
      box-shadow: 0 4px 15px rgba(66, 211, 255, 0.2);
      transform: translateY(-2px);
    }

    .toggle-content {
      display: flex;
      align-items: center;
      gap: 1rem;

      .filter-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        background: rgba(66, 211, 255, 0.2);
        border-radius: 8px;
        color: ${(props) => props.theme['light-blue']};
      }

      .filter-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.3rem;

        .main-text {
          font-size: 1rem;
          font-weight: 600;
        }

        .count-text {
          font-size: 0.85rem;
          color: ${(props) => props.theme['gray-100']};
          opacity: 0.8;
        }
      }
    }

    .chevron {
      color: ${(props) => props.theme['light-blue']};
      transition: transform 0.3s ease;
      transform: ${(props) =>
        props.$isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
  }
`

export const FilterList = styled.div<{ $isExpanded: boolean }>`
  @media (max-width: 768px) {
    overflow: hidden;
    max-height: ${(props) => (props.$isExpanded ? '400px' : '0')};
    opacity: ${(props) => (props.$isExpanded ? '1' : '0')};
    transition: all 0.4s ease-in-out;
    background: rgba(24, 24, 26, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    border: 1px solid rgba(66, 211, 255, 0.2);
    width: 100%;

    .filter-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .filter-buttons {
      grid-template-columns: 1fr 1fr;
      gap: 0.8rem;
      padding: 1.2rem;
    }
  }

  @media (min-width: 769px) {
    .filter-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`

interface FilterButtonProps {
  $active: boolean
}

export const FilterButton = styled.button<FilterButtonProps>`
  all: unset;
  min-width: 5.6rem;
  text-align: center;
  border-radius: 12px;
  padding: 0.8rem 1.8rem;
  background: ${(props) =>
    props.$active
      ? 'linear-gradient(135deg, rgba(66, 211, 255, 0.2), rgba(0, 168, 255, 0.1))'
      : 'rgba(24, 24, 26, 0.6)'};
  backdrop-filter: blur(10px);
  color: ${(props) =>
    props.$active ? props.theme['light-blue'] : props.theme['gray-100']};
  border: 1px solid
    ${(props) =>
      props.$active ? props.theme['light-blue'] : 'rgba(66, 211, 255, 0.2)'};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${(props) => (props.$active ? '600' : '400')};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(66, 211, 255, 0.1),
      rgba(0, 168, 255, 0.05)
    );
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: -1;
  }

  &:is(:hover, :focus):not(:disabled) {
    color: ${(props) => props.theme['text-base']};
    border-color: ${(props) => props.theme['light-blue']};
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(66, 211, 255, 0.2);

    &::before {
      opacity: 1;
    }
  }

  ${(props) =>
    props.$active &&
    `
    box-shadow: 0 4px 15px rgba(66, 211, 255, 0.3);
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 2px;
      background: linear-gradient(90deg, ${props.theme['light-blue']}, #00a8ff);
      border-radius: 1px;
    }
  `}

  @media (max-width: 768px) {
    min-width: auto;
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.8rem;
    font-size: 0.8rem;
    min-height: 38px;
  }
`

export const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  .projects-subtitle {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.1rem;
    margin-top: 1rem;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .projects-stats {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;

    .stat-item {
      text-align: center;

      .stat-number {
        font-size: 2rem;
        font-weight: 700;
        background: linear-gradient(
          135deg,
          ${(props) => props.theme['text-base']},
          ${(props) => props.theme['light-blue']}
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .stat-label {
        color: ${(props) => props.theme['gray-100']};
        font-size: 0.9rem;
        margin-top: 0.3rem;
      }
    }
  }

  @media (max-width: 768px) {
    .projects-stats {
      gap: 1rem;

      .stat-number {
        font-size: 1.5rem;
      }
    }
  }
`
