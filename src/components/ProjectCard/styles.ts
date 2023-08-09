import { styled } from 'styled-components'

export const ProjectCardContainer = styled.div`
  border-radius: 2px;
  overflow: hidden;
  height: 415px;
  max-width: 348px;

  background: ${(props) => props.theme['gray-600']};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.24);
  border-bottom: 1px solid ${(props) => props.theme['text-base']};
  transition: border-color 0.2s;
  cursor: default;

  &:is(:hover, :focus) {
    border-bottom: 1px solid ${(props) => props.theme['light-blue']};

    & > div:first-child > div {
      display: flex;
    }
  }
`

export const ImageProjectCard = styled.div`
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 200px;
  }

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    animation: on-display-div 0.2s ease-in-out forwards;

    a {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      position: relative;
      line-height: 2;
      color: ${(props) => props.theme['text-base']};
      font-size: 0.875rem;
      cursor: pointer;
      opacity: 0;
      animation: on-display-a 0.2s 0.1s ease-in-out forwards;

      &:is(:hover, :focus)::after {
        width: 100%;
        left: 0%;
      }

      &::after {
        content: '';
        bottom: -2px;
        left: 50%;
        position: absolute;
        width: 0%;
        height: 1px;
        background-color: ${(props) => props.theme['text-base']};
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 0.2s;
        transition-property: width, left;
      }
    }

    @keyframes on-display-div {
      0% {
        background: rgb(0, 0, 0, 0);
      }
      100% {
        background: rgb(0, 0, 0, 0.7);
      }
    }

    @keyframes on-display-a {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`

export const BodyProjectCard = styled.div`
  padding: 1rem 1.2rem;

  h2 {
    font-size: 1.25rem;
  }

  p {
    grid-area: description;
    color: ${(props) => props.theme['gray-100']};
    line-height: 1.7;
    font-size: 0.875rem;
  }
`

export const TagsProject = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem 0;

  span {
    border: 1px solid ${(props) => props.theme['light-blue']};
    border-radius: 2px;
    padding: 0.3rem 0.5rem;
    font-size: 0.75rem;
  }
`
