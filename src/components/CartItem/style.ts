import styled from '@emotion/styled';
import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";

export const Container = styled(Flex)`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    gap: 21px;
    flex-shrink: 0;
`;

export const ContentCart = styled(Flex)`
    display: none;

    @media(max-width: 968px) {
        width: 100%;
        height: 200px;
        flex-direction: column;
        display: flex;
    }
`;

export const ContentButtonsAdd = styled(Flex)`
    width: auto;
    height: auto;

    align-items: center;
    justify-content: center;

`;

export const CarditemsShop = styled(Flex)`

    width: 100%;
    height: 100%;

    flex-direction: row;
    align-items: center;

    img {
      width: 64px;
      height: 82px;
    }

    @media(max-width: 968px) {
        align-items: flex-start;
    }
`;

export const BoxCart = styled(Box)`

    width: 100%;
    height: auto;

    margin-left: 10px;

    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const Title = styled(Text)`
    width: 100%;

    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    color: #2F2E41;

    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`;

export const Price = styled(Text)`
    display: inline-flex;
    color: #2F2E41;

    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`;

export const ButtonAddRemove = styled(Button)`

    width: 50px;
    height: 50px;
    
    background-color: transparent;

    img {
        width: 100%;
        height: 100%;
    }

`;

export const Inputs = styled(Input)`
   
    width: 59px;
    height: 26px;
    border-radius: 4px;
    border: 1px solid #D9D9D9;

    background: #FFF;
    color: #000;
    padding-left: 23px;

`;

export const Buttons = styled(Button)`

    width: 50px;
    height: 20px;
    
    background-color: transparent;

    img {
      width: 100%;
      height: 100%;
    }
`;

export const Divison = styled(Divider)`

    background-color: #999999;
`;

export const ContentTotal = styled(Flex)`
    
    width: 100%;

    padding: 20px;

    align-items: center;
    flex-direction: row;
    justify-content: flex-end;

    @media(max-width: 968px) {
        justify-content: center;
    }

`;
export const Total = styled(Text)`

    width: 50%;

    color: #999;

    text-align: center;
    font-family: "Open Sans";
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;


    @media(max-width: 968px) {
        font-size: 14px;
    }

`;
export const ButtonCartEnd = styled(Button)`

    width: 30%;
    height: 40px;
    flex-shrink: 0;

    border-radius: 4px;
    background: #009EDD;
    color: #FFF;

    text-transform: uppercase;
    text-align: center;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;

    @media(max-width: 968px) {
        width: 100%;
    } 
`;


export const TotalCart = styled(Text)`
   
   color: #2F2E41;

  text-align: center;
  font-family: "Open Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

`;

export const BoxAdd = styled(Box)`
   
   width: 100%;
   align-items: center;
   justify-content: space-between;
   display: flex;
   
   margin-top: 25px;


   @media(max-width: 968px) {
        position: relative;
        left: -15px;
        
        margin-top: 0;

   } 

`;

export const BoxSubTotal = styled(Box)`
   
   width: auto;
   align-items: center;
   justify-content: flex-start;
   
   position: relative;
`;

export const SuBtotal = styled(Text)`

    color: #999;

    font-family: "Open Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const PriceSubTotal = styled(Text)`

    color: #2F2E41;

    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

// Cart desktop

export const ContentDesk = styled(Flex)`

    display: flex;

    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 968px) {
        display: none;
    }

`;

export const BoxDesk = styled(Box)`

    width: auto;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 10px;

`;

export const TitleProducts = styled(Text)`
   
    width: 100%;
    margin-bottom: 20px;
    color: #999;

    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;

`;

export const ContentImgprice = styled(Flex)`

 
    width: 100%;
    flex-direction: row;
    align-items: center;

    img {
        width: 89px;
        height: 114px;
    }

`;

export const ContainPrice = styled(Box)`
     
    width: auto;
    height: auto;
    
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    margin-left: 52px;

`;

export const TextTitleDesk = styled(Text)`

    color: #2F2E41;

    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`;

export const ContentQuantyd = styled(Box)`

   width: auto;
   height: 155px;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-direction: column;

`; 