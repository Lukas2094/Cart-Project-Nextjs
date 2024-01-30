
import React from 'react';
import * as S from './style';
import { Image } from '@chakra-ui/react';
import { useCart } from '@/contexts/CartContexts';

interface CartItemProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
  src: string;
}

export const CartItem: React.FC<CartItemProps> = ({ id, title, price, quantity, src }) => {
  const { updateCartItem, removeCartItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    // Garantir que a quantidade nunca seja menor que 1
    newQuantity = Math.max(newQuantity, 1);
    updateCartItem({ id, title, price, quantity: newQuantity, src });
  };

  const handleRemoveItem = () => {
    removeCartItem(id);
  };

  return (
    <S.Container key={id}>

      {/* Cart Mobile */}
      <S.ContentCart>
        <S.CarditemsShop>
          <Image src={src} alt='cart' />
        
          <S.BoxCart>
            <S.Title>
              {title}
              <S.Price>
                R$ {price}
                <S.Buttons onClick={handleRemoveItem}>
                  <Image src='/imgs/svg/trash.svg' alt='remove' />
                </S.Buttons>
              </S.Price>
            </S.Title>
          
            <S.BoxAdd>
              <S.ContentButtonsAdd>
                  <S.ButtonAddRemove
                    _active={{background: 'transparent' , border: 'none', outline: 'none'}}
                    _hover={{background: 'transparent' , border: 'none' , outline: 'none'}}
                    _focus={{background: 'transparent' , border: 'none' , outline: 'none'}}
                    onClick={() => handleQuantityChange(quantity - 1)}>
                    <Image src='/imgs/svg/menor.svg' alt='menor' />
                  </S.ButtonAddRemove>
          
                  <S.Inputs type='number' value={quantity} onChange={(e) => handleQuantityChange(Number(e.target.value))} />
                  <S.ButtonAddRemove
                    _active={{background: 'transparent' , border: 'none', outline: 'none'}}
                    _hover={{background: 'transparent' , border: 'none' , outline: 'none'}}
                    _focus={{background: 'transparent' , border: 'none' , outline: 'none'}}
                    onClick={() => handleQuantityChange(quantity + 1)}>
                    <Image src='/imgs/svg/maior.svg' alt='maior' />
                  </S.ButtonAddRemove>
              </S.ContentButtonsAdd>
             
            
              <S.BoxSubTotal>
                <S.SuBtotal>SUBTOTAL</S.SuBtotal>
                <S.PriceSubTotal>R$ {parseFloat((price * quantity).toFixed(2))}</S.PriceSubTotal>
              </S.BoxSubTotal>
            </S.BoxAdd>
      
          </S.BoxCart>
        </S.CarditemsShop>
    
        <S.Divison />
      </S.ContentCart>

      
      {/* Cart Deskt */}

      <S.ContentDesk>
        <S.BoxDesk>
          <S.TitleProducts>Produto</S.TitleProducts>

          <S.ContentImgprice>
            <Image src={src} alt='cart' />

            <S.ContainPrice>
              <S.TextTitleDesk>{ title }</S.TextTitleDesk>
              <S.TextTitleDesk>R$ { price }</S.TextTitleDesk>
            </S.ContainPrice>
          </S.ContentImgprice>
        </S.BoxDesk>

        <S.ContentQuantyd>
          <S.TitleProducts>QTD</S.TitleProducts>

          <S.BoxAdd>
              <S.ContentButtonsAdd>
                  <S.ButtonAddRemove
                    _active={{background: 'transparent' , border: 'none', outline: 'none'}}
                    _hover={{background: 'transparent' , border: 'none' , outline: 'none'}}
                    _focus={{background: 'transparent' , border: 'none' , outline: 'none'}}
                    onClick={() => handleQuantityChange(quantity - 1)}>
                    <Image src='/imgs/svg/menor.svg' alt='menor' />
                  </S.ButtonAddRemove>
          
                  <S.Inputs type='number' value={quantity} onChange={(e) => handleQuantityChange(Number(e.target.value))} />
                  <S.ButtonAddRemove
                    _active={{background: 'transparent' , border: 'none', outline: 'none'}}
                    _hover={{background: 'transparent' , border: 'none' , outline: 'none'}}
                    _focus={{background: 'transparent' , border: 'none' , outline: 'none'}}
                    onClick={() => handleQuantityChange(quantity + 1)}>
                    <Image src='/imgs/svg/maior.svg' alt='maior' />
                  </S.ButtonAddRemove>
              </S.ContentButtonsAdd>
            
          </S.BoxAdd>
        </S.ContentQuantyd>

        <S.ContentQuantyd width={'20% !important'}>
          <S.TitleProducts>SubTotal</S.TitleProducts>

          <S.ContentImgprice>
            <S.ContainPrice marginTop={'40px'} marginLeft={'0 !important'} width={'100% !important'}>
              <S.PriceSubTotal width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>R$ {parseFloat((price * quantity).toFixed(2))}
                <S.Buttons onClick={handleRemoveItem}>
                  <Image src='/imgs/svg/trash.svg' alt='remove' />
                </S.Buttons>
              </S.PriceSubTotal>
               
            </S.ContainPrice>
          </S.ContentImgprice>
        </S.ContentQuantyd>

      </S.ContentDesk>

    </S.Container>
  );
};
