import { useState } from "react";

import { getDownloadInfo } from "./helpers";

interface DownloadRowProps {
  name: string;
  url: string;
  displaySize: string;
  sha256: string;
}

const DownloadRow = ({ name, url, displaySize, sha256 }: DownloadRowProps) => {
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
      <h1>DownloadRow</h1>
      <h1>adsfasdf</h1>
    </>
  );
};

export default DownloadRow;
