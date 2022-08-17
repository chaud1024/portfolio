import React from "react";

import "./scss/sub_img.scss";

const SubImg = ({ subImage, alt }) => {
  return (
    <div className="sub-img">
      <img src={subImage} alt={alt} />
    </div>
  );
};

export default SubImg;
