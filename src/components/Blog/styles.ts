import { styled } from 'styled-components'

export const BlogContainer = styled.section`
  width: 100%;
  margin-top: 7rem;
`

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  align-items: stretch;
`

export const BlogCard = styled.article`
  background: rgba(24, 24, 26, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(66, 211, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  min-height: 280px;
  max-width: 530px;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${(props) => props.theme['light-blue']};
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(66, 211, 255, 0.3) inset, 0 0 40px rgba(66, 211, 255, 0.15);
    transform: translateY(-8px);
  }

  .blog-header {
    margin-bottom: 1rem;
  }

  .blog-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-100']};
    opacity: 0.8;

    .date {
      color: ${(props) => props.theme['light-blue']};
      font-weight: 500;
    }

    .read-time {
      font-style: italic;
    }
  }

  .blog-content {
    flex: 1;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: ${(props) => props.theme['text-base']};
      line-height: 1.4;
      font-weight: 600;
      min-height: 3.2rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    p {
      color: ${(props) => props.theme['gray-100']};
      line-height: 1.6;
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
      flex: 1;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .blog-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
      min-height: 2rem;

      span {
        background: rgba(66, 211, 255, 0.1);
        border: 1px solid rgba(66, 211, 255, 0.3);
        border-radius: 12px;
        padding: 0.3rem 0.7rem;
        font-size: 0.7rem;
        font-weight: 500;
        color: ${(props) => props.theme['light-blue']};
        transition: all 0.3s ease;
        height: fit-content;

        &:hover {
          background: rgba(66, 211, 255, 0.2);
          border-color: ${(props) => props.theme['light-blue']};
        }
      }
    }

    .read-more {
      display: inline-flex;
      align-items: center;
      color: ${(props) => props.theme['light-blue']};
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      transition: all 0.3s ease;
      margin-top: auto;

      &:hover {
        color: ${(props) => props.theme['text-base']};
      }
    }
  }

  @media (max-width: 768px) {
    min-height: 320px;

    .blog-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }
`
