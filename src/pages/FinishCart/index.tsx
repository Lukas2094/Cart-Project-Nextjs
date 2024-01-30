import React from "react";
import Header from '@/components/Header';
import * as S from '../../styles/FinishCart';
import { Image, Link, useMediaQuery } from "@chakra-ui/react";


export default function FinishCart() {

    const [isLargerThan768] = useMediaQuery("(max-width: 968px)");
    
    return (
        <S.Container>
            <Header count={'0'} />
            
            <S.ContentImgs>
                <>
                    <Link href="/" width={'100%'}>
                     {isLargerThan768 ? (
                        <Image src="/imgs/FinishcartMobile.PNG" alt="finish"/>
                        ) : (
                        <Image src="/imgs/FinishCart.PNG" alt="finish"/>
                    )}
                    </Link>
                   
                </>
            </S.ContentImgs>
        </S.Container>
    )
}