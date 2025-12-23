import styled, { createGlobalStyle } from "styled-components";
import { breackpoints } from "./brakpionts";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    background-color: ${({theme})=>theme.colors.darkBlue};
    color: ${({theme})=>theme.colors.white};
    font-family: "Outfit Variable","Arial",sans-serif;
    font-weight: 400;
    font-size: .9375rem;
    line-height: 1;
}
ul{
    list-style: none;
}
button{
    cursor: pointer;
    background-color: transparent;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
}
input{
    background-color: transparent;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
}
a{
    text-decoration: none;
    color: inherit;
}
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const TextM = styled.p`
  font-size: 0.9375rem;
  line-height: 1;
`;

export const TextS = styled.p`
  font-size: 0.8125rem;
  line-height: 1;
`;

export const TitleL = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.5px;
`;
export const TitleM = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1;
`;
export const TitleXs = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1;
`;
