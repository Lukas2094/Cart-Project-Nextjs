import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`

    width: 100%;
    height: 60px;
    max-width: 970px;
    justify-content: space-between;
    align-items: center;

    padding: 18px 10px;

    position: absolute;
    top: 0;
    z-index: 50;

    @media(max-width: 968px) {
        max-width: 100%;
    } 

`;

export const Texts = styled(Text)`       
        color: #FFF;
        font-family: "Open Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
`;

export const ContentCartTexts = styled(Flex)`
    
    width: auto;
    height: auto;

    flex-direction: column;

`;

export const TextCart = styled(Text)`
   
    width: 95.946px;
    height: 19px;

    color: #FFF;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media(max-width: 968px) {
        display: none;
    } 

`;

export const ContentCart = styled(Flex)`
    width: auto;

    align-items: center;
    justify-content: space-between;
    
    font-size: 12px; 
    color: #999;
    font-family: "Open Sans";  
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    img {
        margin-left: 10px;
    }


    

`;