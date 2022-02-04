import { styled } from "@stitches/react";

import { getDownloadInfo } from "./helpers";
import Link from "components/Link";

interface DownloadProps {
  name: string;
  url: string;
  displaySize: string;
  sha256: string;
}

const DownloadRow = ({ name, url, displaySize, sha256 }: DownloadProps) => {
  const operatingSystemInfo = getDownloadInfo(name);

  return (
    <>
      <BodyRow key={sha256}>
        <StyledTd>{operatingSystemInfo.name}</StyledTd>
        <StyledTd>
          {/* @ts-expect-error placeholder, issue with passing props to stitches */}
          <ChecksumButton href={sha256}>SHA256</ChecksumButton>
        </StyledTd>
        <StyledTd>{displaySize}</StyledTd>
        <StyledTd>
          <Link href={url}>{name}</Link>
        </StyledTd>
      </BodyRow>
    </>
  );
};

export default DownloadRow;

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
  // fontSize: "1 px",
  lineHeight: "24px",
  "&:last-child": {
    border: "none",
  },
});

const StyledTd = styled("td", {
  padding: "5px 30px",
});
