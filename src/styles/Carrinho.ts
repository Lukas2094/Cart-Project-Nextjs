import { Flex } from "@chakra-ui/react";
import styled from '@emotion/styled';

export const ContainerCart = styled(Flex)`

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

export const Container = styled(Flex)`
  max-width: 990px;
  width: 100%;
  margin-top: 50px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const EmptyCartMessage = styled(Flex)`
  font-size: 18px;
  text-align: center;
  margin-top: 40px;


  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: #FFF;

  width: 100%;
  height: auto;
  border-radius: 7px;

  padding: 15px;
  flex-direction: column;
  justify-content: space-between;


  @media(max-width: 968px) {
    height: 80vh;
    max-height: 100%;
  }
`;

export const ContentTotalContainer = styled(Flex)`

    width: 100%;
    height: auto;

    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;

    @media(max-width: 968px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;

    }
`;