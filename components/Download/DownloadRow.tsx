import { useState } from "react";

import styled from "styled-components";
import css from "@styled-system/css";

import { getDownloadInfo } from "./helpers";
import ToolTipModal from "./components/ToolTipModal";

interface DownloadProps {
  name: string;
  url: string;
  displaySize: string;
  sha256: string;
}

const DownloadRow = ({ name, url, displaySize, sha256 }: DownloadProps) => {
  const operatingSystemInfo = getDownloadInfo(name);
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal((previousState) => !previousState);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <BodyRow key={sha256}>
        <StyledTd>{operatingSystemInfo.name}</StyledTd>
        <StyledTd style={{ position: "relative" }}>
          {/* @ts-expect-error issue passing props to stitches */}
          <ChecksumButton href={sha256} onClick={handleModalToggle}>
            SHA256
          </ChecksumButton>
          {showModal && (
            <ToolTipModal onClose={handleClose}>{sha256}</ToolTipModal>
          )}
        </StyledTd>
        <StyledSizeTd>{displaySize}</StyledSizeTd>
        <StyledTd>
          <StyledLink href={url}>{name}</StyledLink>
        </StyledTd>
      </BodyRow>
    </>
  );
};

export default DownloadRow;

const StyledSizeTd = styled("td")(
  css({
    color: "gray",
  })
);

const StyledLink = styled("a")(
  css({
    fontSize: "text-md",
    color: "light-blue",
    fontWeight: "normal",
  })
);

const ChecksumButton = styled("button")(
  css({
    cursor: "pointer",
    borderRadius: "default",
    backgroundColor: "transparent",
    border: "1px solid #BDCAD0",
    color: "gray",
    transition: "all 0.3s",
    fontSize: "text-xs",
    padding: "0px 8px",
    height: "24px", // theming not working
    "&:hover": {
      border: "1px solid light-blue",
    },
  })
);

const BodyRow = styled("tr")(
  css({
    borderTop: "1px solid #F0F2F4",
    borderBottom: "1px solid #F0F2F4",
    fontSize: "text-sm",
    lineHeight: "md",
    "&:last-child": {
      border: "none",
    },
  })
);

const StyledTd = styled("td")(
  css({
    padding: [2, "5px 30px"],
    fontWeight: "bold",
    maxWidth: "200px",
  })
);
