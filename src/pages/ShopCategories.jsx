import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/shopContext';
import dropDown from '../components/Assets/dropdown_icon.png';
import Item from '../components/item/item';

const ShopCategories = (props) => {
  const all_product = useContext(ShopContext);

  return (
    <div>
      <div className="shop-category">
        <img className='shopCategory-banner' src={props.banners} alt="" />
        <div className="shopcategory-indexsort">
          <p>
            <span>showing 1-12</span> out of 36 products
          </p>
          <div className="shopCategory-sort">
            Sort by <img src={dropDown} alt="" />
          </div>
        </div>
        <div className="shopCategory-product">
          {all_product.map((item, i) => {
            if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            } else{
              return null;
            }
          })}
        </div>
        <div className="explore-button">
          Explore More
        </div>
      </div>
    </div>
  )
}

export default ShopCategories;


