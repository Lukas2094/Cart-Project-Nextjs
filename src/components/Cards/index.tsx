
import React, { useState } from 'react';
import * as S from './styles';
import { Image } from "@chakra-ui/react";
import { useCart } from '@/contexts/CartContexts';

interface CardProps {
  id: string;
  src: string;
  title: string;
  price: number;
}

export function CardsMovies({ id, src, title, price }: CardProps) {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setCount(count + 1);
    addToCart({ id, src, title, price, quantity: 1 });
  };

  return (
    <S.Container>
      <Image src={src} alt="movie" />
      <S.Title>{title}</S.Title>
      <S.Price>R$ {price}</S.Price>
      <S.ContentButton>
        <S.Buttons
          onClick={handleAddToCart}
          style={{
            background: count >= 1 ? '#039B00' : '#009EDD',
            transition: 'background 0.3s ease',
          }}
          _active={count >= 1 ? { background: '#039B00' } : { background: '#009EDD' }}
          _hover={count >= 1 ? { background: '#039B00' } : { background: '#009EDD' }}
        >
          <Image src="/imgs/svg/cardShop.svg" alt="cart" />
          {count}
          <S.TextAdd>ADICIONAR AO CARRINHO</S.TextAdd>
        </S.Buttons>
      </S.ContentButton>
    </S.Container>
  );
}
