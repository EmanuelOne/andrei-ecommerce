import React, { useState } from "react";
import SHOP_DATA from "../../shopData";
import CollectionPreview from "../../components/collection-preview/collection-preview";
// import "./coll/collection-preview.styles.scss";
const shopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  // console.log(collections);
  return (
    <div className="shop-page">
      {collections.map(({ id, items, title }, i) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};

export default shopPage;
