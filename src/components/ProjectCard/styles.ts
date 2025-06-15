import { styled } from 'styled-components'

export const ProjectCardContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  height: 415px;
  max-width: 348px;

  background: rgba(24, 24, 26, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(66, 211, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(66, 211, 255, 0.1) inset;
  transition: all 0.3s ease;
  cursor: default;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme['light-blue']},
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme['light-blue']};
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(66, 211, 255, 0.3) inset, 0 0 40px rgba(66, 211, 255, 0.2);
    transform: translateY(-8px);

    &::before {
      opacity: 1;
    }

    .overlay {
      opacity: 1;
    }
  }
`

export const ImageProjectCard = styled.div`
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 200px;
    transition: transform 0.3s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    opacity: 0;
    transition: opacity 0.3s ease;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['text-base']};
      font-size: 0.875rem;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      background: rgba(66, 211, 255, 0.1);
      border: 1px solid rgba(66, 211, 255, 0.3);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &:hover {
        background: rgba(66, 211, 255, 0.2);
        border-color: ${(props) => props.theme['light-blue']};
      }

      svg {
        color: ${(props) => props.theme['light-blue']};
      }
    }
  }
`

export const BodyProjectCard = styled.div`
  padding: 1.5rem;
  height: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.25rem;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme['text-base']},
      ${(props) => props.theme['light-blue']}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }

  p {
    color: ${(props) => props.theme['gray-100']};
    line-height: 1.6;
    font-size: 0.875rem;
    flex: 1;
    opacity: 0.9;
  }
`

export const TagsProject = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  span {
    background: rgba(66, 211, 255, 0.1);
    border: 1px solid rgba(66, 211, 255, 0.3);
    border-radius: 12px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${(props) => props.theme['light-blue']};
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
      background: rgba(66, 211, 255, 0.2);
      border-color: ${(props) => props.theme['light-blue']};
    }
  }
`
