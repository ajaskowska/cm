import styled from "styled-components";

export const Button = styled.button`
  border: none;
  margin: 3rem;
  text-transform: uppercase;
  cursor: pointer;
  width: 240px;
  height: 60px;
  background-color: ${({bg})=>bg || '#191919'} ;
  color: ${({color})=>color || '#ECECEC'};;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
    transition: 1s ease-in-out;
    transform: scale(1.05);
  }
`
