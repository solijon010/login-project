import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { breackpoints } from "../../../styles/brakpionts";


export const Card = styled.div`
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
     background-color: ${theme.colors.dark.semiDarkblue};
     padding: 1.5rem 1.5rem 2rem 1.5rem ;
     display: flex;
     flex-direction: column;
     gap: 2.5rem;

     @media ${breackpoints.table}{
        padding: 2rem;
     }

`