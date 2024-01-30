import { Flex } from "@chakra-ui/react";
import styled from '@emotion/styled';

export const Container = styled(Flex)`

   width: 100%;
   height: auto;

   align-items: center;
   justify-content: center;
   padding: 8px;
   
   @media (max-width: 968px) {
      height: 100vh;
      padding: 0;
      margin: 0;
      flex-direction: column;
   }

`;


export const ContentLoading = styled(Flex)`

    width: 100%;
    height: auto;

    align-items: center;
    justify-content: center;

    margin: 10% 0%;
`;

export const WrapperCards = styled(Flex)`

    width: 100%;
    height: 100%;
    max-width: 1200px;

    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;

    padding: 5px;
    padding-top: 8rem;
    margin-bottom: 30px;

    @media(max-width: 968px) {
      width: auto;
      flex-direction: column;
      flex-wrap: nowrap;
      padding-top: 90rem;
      margin-bottom: 30px;
    }

`;