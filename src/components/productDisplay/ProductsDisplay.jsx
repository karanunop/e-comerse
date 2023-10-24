import React, { useContext } from 'react'
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png'
import dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/shopContext';

const ProductsDisplay = (props) => {
    const {product} = props;
    const addToCart = useContext(ShopContext);
  return (
    <div className='product-display'>
      <div className="productDisplay-left">
        <div className="productdisplay-img-list">
        <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
     <div className="productdisplay-img">
        <img className='productDisplay-main-img' src={product.image} alt="" />
      </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="old-price">
                ${product.old_price}
            </div>
            <div className="new-price">
            ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-desc">
            A lightweight , usually knitted , pullover shirt, close fitting and round neckline and short sleeves, worn as undershirt or out garment.
        </div>
        <div className="size">
            <h1>select size</h1>
        </div>
        <div className="sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
        <button className='button' onClick={() =>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="category"> <span>category: </span> Women, T-shirt, crop Top</p>
        <p className="category"> <span>tags: </span> modern, </p>
      </div>
    </div>
  )
}

export default ProductsDisplay
