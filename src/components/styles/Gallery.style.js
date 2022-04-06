import styled from "styled-components";


export const Image = styled.img`
  display: block;
  align-items: center;
  width: 25%;
  flex: 0 1 auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  opacity: 1;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    display: block;
    content: '';
    cursor: pointer;
    transform: scale(1.05);
    filter: brightness(40%);
  
  }
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  
`