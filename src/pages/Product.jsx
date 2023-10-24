import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/BreadCrums/Breadcrums';
import ProductsDisplay from '../components/productDisplay/ProductsDisplay';
import DescriptionBox from '../components/descriptionBox/descriptionBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

const Product = () => {
  const all_product= useContext(ShopContext);
  const {productId}  = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  if (!product) {
    return (
      <div>
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductsDisplay product ={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;

