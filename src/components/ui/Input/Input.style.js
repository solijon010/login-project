import styled from "styled-components";

export const InputWrraper = styled.div`
  width: 100%;
  position: relative;

  span {
    position: absolute;
    right: 0;
    top: 0;
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 1rem 1.125rem 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.greyishBlue};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white50};
  }

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.white};
  }
`;
