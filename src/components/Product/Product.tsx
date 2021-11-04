import React from 'react';
import ImagePreview from './ImagePreview';
import images from '../../assets/data/images.json'

import ProductInfo from './ProductInfo';
import { Container } from './style';

const ProductUI: React.FC = () => {
  return (
  <Container>
    <ImagePreview images={images}/>
    <ProductInfo/>
  </Container>
  );
};

export default ProductUI;
