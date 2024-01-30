
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { getProducts } from "@/services/getProducts";
import { Products } from "@/interfaces/Produtcs";
import * as S from '../styles/HomePage';
import Header from '@/components/Header';
import { CircularProgress } from "@chakra-ui/react";
import { CardsMovies } from "@/components/Cards";
import { useCart } from "@/contexts/CartContexts";

interface HomeProps {
  products: Products[];
}

export default function Home({ products }: HomeProps) {
  const [loading, setLoading] = useState(false);
  const { addToCart, cartCount } = useCart();

  useEffect(() => {
    setTimeout(() => {
      if (products.length !== 0) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    }, 1500);
  });

  return (
    <>
      <S.Container>
        <Header count={cartCount.toString()} />
        {loading === false ? (
          <S.ContentLoading>
            <CircularProgress isIndeterminate size="100px" color="grey" thickness="4px" />
          </S.ContentLoading>
        ) : (
          <>
            <S.WrapperCards>
              {products.map((item): any => (
                <CardsMovies
                  key={item.id}
                  src={item.image}
                  price={item.price}
                  title={item.title}
                  id={item.id}
                />
              ))}
            </S.WrapperCards>
          </>
        )}
      </S.Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};
