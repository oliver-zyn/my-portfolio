import { styled } from 'styled-components'

export const ContactContainer = styled.section`
  width: 100%;
  margin-top: 7rem;
`

export const BodyContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2rem;
  gap: 2rem;
  max-width: 800px;
  width: 100%;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.5rem;

    input,
    textarea {
      all: unset;
      width: 100%;
      background: rgba(24, 24, 26, 0.8);
      backdrop-filter: blur(15px);
      padding: 1.2rem;
      padding-right: 3.5rem; /* Espaço para o ícone */
      border: 1px solid rgba(66, 211, 255, 0.2);
      border-radius: 12px;
      transition: all 0.3s ease;
      color: ${(props) => props.theme['text-base']};
      box-sizing: border-box;

      &:focus {
        border-color: ${(props) => props.theme['light-blue']};
        box-shadow: 0 0 20px rgba(66, 211, 255, 0.3),
          0 0 40px rgba(66, 211, 255, 0.1);
        background: rgba(24, 24, 26, 0.95);
        transform: translateY(-2px);
      }

      &::placeholder {
        color: ${(props) => props.theme['gray-100']};
        opacity: 0.7;
      }

      &:valid:not(:placeholder-shown) {
        border-color: rgba(34, 197, 94, 0.4);
      }

      &:invalid:not(:placeholder-shown) {
        border-color: rgba(239, 68, 68, 0.4);
      }
    }

    textarea {
      resize: vertical;
      min-height: 120px;
      max-height: 200px;
      font-family: inherit;
      line-height: 1.5;
    }

    button {
      all: unset;
      min-width: 12rem;
      max-width: 14rem;
      align-self: center;
      background: linear-gradient(
        135deg,
        ${(props) => props.theme['light-blue']},
        #00a8ff
      );
      color: ${(props) => props.theme['gray-700']};
      padding: 1.2rem 2rem;
      font-size: 1rem;
      border-radius: 12px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      overflow: hidden;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 1px;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #00a8ff, #0080cc);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
      }

      &:is(:hover, :focus):not(:disabled) {
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(66, 211, 255, 0.4);

        &::before {
          opacity: 1;
        }
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none !important;

        &:hover::before {
          opacity: 0;
        }
      }

      .spinner {
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    form {
      gap: 1.2rem;

      input,
      textarea {
        padding: 1rem;
        padding-right: 3rem;
        font-size: 0.9rem;
      }

      button {
        max-width: none;
        width: 100%;
      }
    }
  }
`

interface StatusMessageProps {
  type: 'success' | 'error'
}

export const StatusMessage = styled.div<StatusMessageProps>`
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  background: ${(props) =>
    props.type === 'success'
      ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))'
      : 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))'};
  border: 1px solid
    ${(props) =>
      props.type === 'success'
        ? 'rgba(34, 197, 94, 0.3)'
        : 'rgba(239, 68, 68, 0.3)'};
  color: ${(props) => (props.type === 'success' ? '#22c55e' : '#ef4444')};
  backdrop-filter: blur(10px);
  animation: slideInFromBottom 0.4s ease-out;

  @keyframes slideInFromBottom {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const FormProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(66, 211, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 1rem;
`

export const FormProgress = styled.div<{ progress: number }>`
  height: 100%;
  width: ${(props) => props.progress}%;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme['light-blue']},
    #00a8ff
  );
  border-radius: 2px;
  transition: width 0.3s ease;
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  .input-icon {
    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${(props) => props.theme['gray-100']};
    opacity: 0.6;
    transition: all 0.3s ease;
    z-index: 10;
    pointer-events: none;
  }

  .input-icon.valid {
    color: #22c55e;
    opacity: 1;
  }

  .input-icon.invalid {
    color: #ef4444;
    opacity: 1;
  }

  /* Para textarea, posicionar o ícone no topo */
  textarea + .input-icon {
    top: 1.5rem;
    transform: none;
  }
`
