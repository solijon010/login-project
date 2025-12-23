import styled from "styled-components";


export const Input = styled.input`
  width: 100%;
  padding: 0 1rem 1.125rem 1rem;
  border-bottom: 2px solid ${({theme})=>theme.colors.greyishBlue};
  outline: none;

  &::placeholder {
    color: ${({theme})=>theme.colors.white50};
  }

  &:focus {
    border-bottom-color: ${({theme})=>theme.colors.white};
  }
`;
