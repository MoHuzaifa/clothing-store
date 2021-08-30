import React from "react";
import { useDispatch } from "react-redux";

import "./CollectionItem.scss";
import CustomButton from "../custom-button/CustomButton";
import { addItem } from "../../redux/cart/cartActions";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <div data-testid={item.id} className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
