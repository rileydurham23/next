import { styled } from "@stitches/react";
import { useState } from "react";

import { getDownloadInfo } from "./helpers";
import ToolTipModal from "./ToolTipModal";

interface DownloadProps {
  name: string;
  url: string;
  displaySize: string;
  sha256: string;
}

const DownloadRow = ({ name, url, displaySize, sha256 }: DownloadProps) => {
  const operatingSystemInfo = getDownloadInfo(name);
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <BodyRow key={sha256}>
        <StyledTd>{operatingSystemInfo.name}</StyledTd>
        <StyledTd>
          {/* @ts-expect-error issue passing props to stitches */}
          <ChecksumButton href={sha256} onClick={handleModalToggle}>
            SHA256
          </ChecksumButton>
          <ToolTipModal showModal={showModal} setShowModal={setShowModal}>
            {sha256}
          </ToolTipModal>
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

const StyledSizeTd = styled("td", {
  color: "#607d8b",
});

const StyledLink = styled("a", {
  fontSize: "14px",
  color: "#0091ea",
  fontWeight: "normal",
});

const ChecksumButton = styled("button", {
  cursor: "pointer",
  borderRadius: "4px",
  backgroundColor: "transparent",
  border: "1px solid rgb(189, 202, 208)",
  color: "rgb(96, 125, 139)",
  transition: "all 0.3s",
  fontSize: "10px",
  padding: "0px 8px",
  height: "24px",
  "&:hover": {
    border: "1px solid rgb(0, 145, 234)",
  },
});

const BodyRow = styled("tr", {
  borderTop: "1px solid #F0F2F4",
  borderBottom: "1px solid #F0F2F4",
  fontSize: "11px",
  lineHeight: "24px",
  "&:last-child": {
    border: "none",
  },
});

const StyledTd = styled("td", {
  padding: "5px 30px",
  fontWeight: "bold",
  maxWidth: "200px",
});
