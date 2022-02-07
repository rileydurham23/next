import React, { useState } from "react";

import { styled } from "@stitches/react";

const ToolTipModal = ({ children, showModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <p>{children}</p>
          <button>Close</button>
        </>
      ) : null}
    </>
  );
};

export default ToolTipModal;
