import React from "react";

import "../components/scss/sub_desc.scss";

const SubDesc = ({ name1, name2, attr }) => {
  return (
    <div className="project_desc">
      <h1 className="name1">{name1}</h1>
      <h3 className="name2">{name2}</h3>
      <p className="attr">
        {attr.split("\n").map((txt) => (
          <>
            {txt}
            <br />
          </>
        ))}
      </p>
    </div>
  );
};

export default SubDesc;
