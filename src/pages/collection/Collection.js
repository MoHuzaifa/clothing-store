import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/CollectionItem";
import { collectionIdToMap } from "../../pages/shop/ShopData";
import "./Collection.scss";

const CollectionPage = ({ match }) => {
  const shopData = useSelector((state) => state.shop.collections);

  const [collectionTitle, setCollectionTitle] = useState();
  const [collectionItems, setCollectionItems] = useState(() => {
    for (var i = 0; i < shopData.length; i++) {
      if (shopData[i].title.toLowerCase() === match.params.collectionId) {
        setCollectionTitle(shopData[i].title);
        return shopData[i].items;
      }
    }
  });

  return (
    <div className="collection-page">
      <h2 className="title">{collectionTitle}</h2>
      <div className="items">
        {collectionItems
          ? collectionItems.map((collectionItem) => (
              <CollectionItem key={collectionItem.id} item={collectionItem} />
            ))
          : console.log("OOPS")}
      </div>
    </div>
  );
};

export default CollectionPage;
