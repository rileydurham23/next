import { useState } from "react";

import { AccessAnimation } from "components/AccessAnimation";
import { content } from "./content";
import type { ContentKey } from "./content";
import { ProductBannerV2 } from "components/ProductBanner";

export interface HeaderEntry {
  title: string;
  description: string;
}

const AccessPlane = () => {
  const [currentId, setCurrentId] = useState<ContentKey>("default");
  const contentEntry = content[currentId];
  const subtitle = "Access Plane Features";

  const handleChange = (id: ContentKey) => {
    setCurrentId(id);
  };

  return (
    <ProductBannerV2
      description={contentEntry.description}
      details={contentEntry.details}
      subtitle={subtitle}
      title={contentEntry.title}
    >
      <AccessAnimation onChange={handleChange} />
    </ProductBannerV2>
  );
};

export default AccessPlane;
