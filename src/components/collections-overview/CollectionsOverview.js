import React from "react";
import { useSelector } from "react-redux";

import CollectionPreview from "../collection-preview/CollectionPreview";
import "./CollectionsOverview.scss";

const CollectionsOverview = () => {
  const shopData = useSelector((state) => state.shop.collections);

  return (
    <div className="collections-overview">
      {shopData.map(({ id, ...collectionProps }) => {
        return <CollectionPreview key={id} {...collectionProps} />;
      })}
    </div>
  );
};

export default CollectionsOverview;
