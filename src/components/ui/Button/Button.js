import styled from "styled-components";

export const Button = styled.button`
  padding: 0.875rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.red};
  transition: 0.3s ease all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
