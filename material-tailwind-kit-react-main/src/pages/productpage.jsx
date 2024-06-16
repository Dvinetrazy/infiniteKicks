import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import { datanb, dataadidas, dataconvers, datajordan } from '@/data';

const getProductDataByCategory = (category, title) => {
  let productData = [];
  switch (category) {
    case 'newbalance':
      productData = datanb;
      break;
    case 'adidas':
      productData = dataadidas;
      break;
    case 'converse':
      productData = dataconvers;
      break;
    case 'jordan':
      productData = datajordan;
      break;
    default:
      productData = [];
  }
  return productData.find((product) => product.title === title);
};

export const ProductPage = ({ addToCart }) => {
  const { category, title } = useParams();
  const product = getProductDataByCategory(category, title);
  return <ProductDetail product={product} addToCart={addToCart} />;
};

export default ProductPage;