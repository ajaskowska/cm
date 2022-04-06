import styled from "styled-components";
import background from '../../assets/photo.jpg'


export const Banner = styled.div`
  background-image: url(${background});
  width: 100vw;
  height: 40vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  
`
export const Logo = styled.img`
  position: absolute;
  top: 10%;
  left: 10%;
`
export const BannerTxt = styled.div`
color: white;
  text-shadow: 1px 2px black ;
  display: inline-block;
  text-align: left;
  font-family: 'Arial', sans-serif;
  font-weight: ${({weight})=>weight || '400'};
  font-size: 3rem;
  position: absolute;
  bottom: 10%;
  left: 10%;
  
`