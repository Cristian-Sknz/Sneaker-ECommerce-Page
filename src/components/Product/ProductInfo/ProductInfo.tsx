import React from 'react';

import {
  BrandText,
  ProductName,
  ProductSummary,
  ProductDescription,
  ProductCost,
  ProductPrice,
  ProductPercentOff,
  ProductRealPrice,
  ProductPromotion,
} from './style';

export const ProductInfoUI: React.FC = () => {
  return (
    <>
      <BrandText>Sneaker Company</BrandText>
      <ProductName>Fall Limited Edition Sneakers</ProductName>
      <ProductSummary>
        <ProductDescription>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </ProductDescription>
        <ProductCost>
          <ProductPromotion>
            <ProductPrice>$125.00</ProductPrice>
            <ProductPercentOff>50%</ProductPercentOff>
          </ProductPromotion>
          <ProductRealPrice>$250.00</ProductRealPrice>
        </ProductCost>
      </ProductSummary>
    </>
  );
};
