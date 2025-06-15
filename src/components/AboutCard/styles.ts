import { styled } from 'styled-components'

export const AboutCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;

  background: rgba(24, 24, 26, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(66, 211, 255, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: default;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  &:hover {
    border-color: ${(props) => props.theme['light-blue']};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(66, 211, 255, 0.3) inset, 0 0 20px rgba(66, 211, 255, 0.15);
    transform: translateY(-4px);

    svg {
      color: ${(props) => props.theme['text-base']};
      transform: scale(1.1);
    }

    p {
      color: ${(props) => props.theme['text-base']};
    }
  }

  div.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: rgba(66, 211, 255, 0.1);
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  svg {
    color: ${(props) => props.theme['light-blue']};
    transition: all 0.3s ease;
  }

  div.text {
    flex: 1;
  }

  p {
    color: ${(props) => props.theme['gray-100']};
    font-weight: 500;
    font-size: 0.9rem;
    margin: 0;
    transition: color 0.3s ease;
  }

  @media (max-width: 600px) {
    padding: 0.8rem;
    gap: 0.6rem;

    div.icon {
      width: 35px;
      height: 35px;
    }

    p {
      font-size: 0.85rem;
    }
  }
`
