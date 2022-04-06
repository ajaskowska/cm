import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({direct})=>direct || 'row'} ;
  overflow: hidden;
  flex-wrap: wrap;
  @media (max-width: 576px){
    flex-direction: column;
    flex-wrap: wrap;
  }
  
  
  
`