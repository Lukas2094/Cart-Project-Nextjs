
import React from 'react';
import * as S from './styles';
import { Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContexts';

interface HeaderProps {
  count: string;
}

const Header: React.FC<HeaderProps> = ({ count }) => {
  const { cartCount } = useCart();

  return (
    <S.Container>
      <Link href={'/'}>
        <S.Texts>WeMovies</S.Texts>
      </Link>
      
      <Link href="/Carrinho" passHref>
        <S.ContentCart>
          <S.ContentCartTexts>
            <S.TextCart>Meu Carrinho</S.TextCart>
            {cartCount} itens
          </S.ContentCartTexts>
          <Image src="/imgs/svg/cesta.svg" alt="cart" />
        </S.ContentCart>
      </Link>
    </S.Container>
  );
};

export default Header;
