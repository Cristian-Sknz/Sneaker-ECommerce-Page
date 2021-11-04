import React from 'react';
import CartButtons from './CartButtons';

import { ProductInfoUI } from './ProductInfo';
import { Product, Container } from './style';

const ProductData: React.FC = () => {
  return (
    <Product>
      <Container>
        <ProductInfoUI/>
        <CartButtons/>
      </Container>
    </Product>
  );
};

export default ProductData;
