import { Button, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`

   width: 305px;
   height: auto;

   display: flex;
   padding: 10px 11px;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 15px;
   align-self: stretch;

   border-radius: 4px;
   background: #FFF;

   padding: 15px;

   img {
        width: 147px;
        height: 188px;
   }

   @media(max-width: 968px) {

    width: 380px;

     img {
        width: 147px;
        height: 188px;
     }
   }
`;

export const Title = styled(Text)`

    color: #333;

    text-align: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 12px;
    
`;

export const Price = styled(Text)`

    color: #2F2E41;

    text-align: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 16px;

`;

export const TextAdd = styled(Text)`
    
    text-align: center;
    font-family: "Open Sans";
   
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    font-size: 12px;

`;

export const ContentButton = styled(Flex)`

    width: 100%;
    height: 40px;

    padding: 0px;

    justify-content: center;
    align-items: center;
    align-self: stretch;

    @media(max-width: 968px) {
        height: 40px;
    }
`;

export const Buttons = styled(Button)`
    
    width: 100%;
    height: 100%;
    background: #009EDD;
    gap: 5px;
    color: #FFF;

    text-align: center;
    font-family: "Open Sans";
    font-size: 12px; 
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    img {
            width: 13.6px;
            height: 13.6px;
            flex-shrink: 0;
    }

    @media(max-width: 968px) {
        gap: 12px;

        img {
                width: 13.6px;
                height: 13.6px;
                flex-shrink: 0;
        }
    } 
`;