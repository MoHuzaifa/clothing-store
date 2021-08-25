import React from "react";
import { useState } from "react";
import { shopData } from "../../pages/shop/ShopData";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import "./CollectionsOverview.scss";

const CollectionsOverview = () => {
  return (
    <div className="collections-overview">
      {shopData.map(({ id, ...collectionProps }) => {
        return <CollectionPreview key={id} {...collectionProps} />;
      })}
    </div>
  );
};

export default CollectionsOverview;
