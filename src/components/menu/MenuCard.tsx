import { AssetCardVertical } from "@contentstack/venus-components";
import React from "react";
// COMMENT: Uncomment below import statement
import { TDishes } from "../../types";

// COMMENT: Replace any[] with TDishes[]
const MenuCard: React.FC<{ data: TDishes[] }> = ({ data }) => {
  return (
    <div className="menu-card">
      {data ? (
        // COMMENT: Replace any with TDishes
        data.map((menuItem: TDishes) => (
          <AssetCardVertical
            key={menuItem.uid}
            assetType="image"
            assetUrl={menuItem.image.url}
            title={menuItem.title}
            version="v1"
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default MenuCard;
