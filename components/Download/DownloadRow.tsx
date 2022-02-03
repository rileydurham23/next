import { useState } from "react";
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
  // const info = getDownloadInfo(name);
  // const [popover, togglePopover] = useState(false);
  // let popoverInfo = null;

  // if (popover) {
  //   popoverInfo = (
  //     <Popover placement="top" title="SHA256 Checksum" onClose={togglePopover}>
  //       <StyledField type="text" value={sha256} readOnly />
  //       <Button size="small" kind="secondary" onClick={copyToClipboard}>
  //         Copy
  //       </Button>
  //       <Button
  //         size="small"
  //         kind="outline"
  //         space="left"
  //         onClick={() => togglePopover(false)}
  //       >
  //         Close
  //       </Button>
  //     </Popover>
  //   );
  // }

  return (
    <>
      <BodyRow key={sha256}>
        <StyledTd>{name}</StyledTd>
        <StyledTd>
          <Link href={sha256}>SHA256</Link>
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

const BodyRow = styled("tr", {
  // border: "1px solid #F0F2F4",
  border: "1px solid #D2DBDF",
});

const StyledTd = styled("td", {
  padding: "5px 30px",
});
