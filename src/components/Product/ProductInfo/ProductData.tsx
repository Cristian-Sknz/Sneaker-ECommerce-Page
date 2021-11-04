import React from 'react';
import CartButtons from './CartButtons';

import { ProductDataUI } from './ProductInfo';
import { Product, Container } from './style';

const ProductData: React.FC = () => {
  return (
    <Product>
      <Container>
        <ProductDataUI/>
        <CartButtons/>
      </Container>
    </Product>
  );
};

export default ProductData;
