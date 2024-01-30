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

export const ContentImgs = styled(Flex)`

    width: 100%;
    height: 100%;
    max-width: 970px;

    margin-top: 100px;

    padding: 15px;

    align-items: center;
    justify-content: center;

    img {
        width: 100%;
    }

`;