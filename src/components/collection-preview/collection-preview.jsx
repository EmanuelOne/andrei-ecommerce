import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.styles.scss";
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>

      <div className="preview">
        {items
          .filter((e, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
