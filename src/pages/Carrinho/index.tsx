// Carrinho.tsx
import React from 'react';
import Header from '@/components/Header';
import { CartItem } from '@/components/CartItem';
import { useCart } from '@/contexts/CartContexts';
import * as S from '../../styles/Carrinho';
import { Image, Link } from '@chakra-ui/react';
import { ButtonCartEnd, ContentTotal, Total, TotalCart } from '@/components/CartItem/style';
import { useMediaQuery } from "@chakra-ui/react";
import { useRouter } from 'next/router';

const Carrinho: React.FC = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [isLargerThan768] = useMediaQuery("(max-width: 968px)");

  const router = useRouter();

  const handleFinishCart = () => {
    if (cartItems.length > 0) {
       router.push('/FinishCart');
    } else {
      alert('Não há items no carrinho para Finalizar a Compra')
    }
   
  };


  return (
    <S.ContainerCart>
      <Header count={cartItems.length.toString()} />
      <S.Container>
        {cartItems.length === 0 ? (
          <Link href='/' width={'100%'}>
            <S.EmptyCartMessage>
              <>
                {isLargerThan768 ? (
                  <Image src='/imgs/Empty.PNG' alt='empty' />
               ) : (
                  <Image src='/imgs/EmptyDesk.PNG' alt='empty' />
               )}
              </>
            </S.EmptyCartMessage>
          </Link>
        ) : (
          <S.CartItemsContainer>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                src={item.src}
                quantity={item.quantity} 
              />
            ))}
            <S.ContentTotalContainer>
              <ContentTotal>
                <Total>Total</Total>
                <TotalCart>R$ {parseFloat(total.toFixed(3))}</TotalCart>
                
              </ContentTotal>
            
                <ButtonCartEnd
                   _active={{
                    background: cartItems.length >= 1 ? '#039B00' : '#009EDD',
                    transition: 'background 0.3s ease',
                  }}
                  _hover={{
                    background: cartItems.length >= 1 ? '#039B00' : '#009EDD',
                    transition: 'background 0.3s ease',
                  }}
                  onClick={handleFinishCart}>Finalizar Pedido</ButtonCartEnd>
            </S.ContentTotalContainer>
           
          </S.CartItemsContainer>
        )}
      </S.Container>
    </S.ContainerCart>
  );
};

export default Carrinho;
