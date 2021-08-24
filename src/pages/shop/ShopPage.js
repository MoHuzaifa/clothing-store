import React from "react";
import { useState } from "react";
import shopData from "./ShopData";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const ShopPage = () => {
  const [data, setshopData] = useState(shopData);
  return (
    <div className="shop-page">
      {data.map(({ id, ...collectionProps }) => {
        return <CollectionPreview key={id} {...collectionProps} />;
      })}
    </div>
  );
};

export default ShopPage;
