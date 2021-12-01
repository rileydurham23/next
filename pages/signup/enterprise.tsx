import styled from "styled-components";
import { css } from "components/system";

import { EnterpriseSignup } from "components";
import Pattern1 from "components/Pattern1";
import Section from "components/Section";

const Enterprise = () => {
  return (
    <Pattern1 headTitle="title" headDescription="desc" colorStyle="purple">
      <LeftSide />
      <EnterpriseSignup />
    </Pattern1>
  );
};

const LeftSide = styled(Section)(
  css({
    alignItems: "center",
    backgroundColor: "lightest-gray",
    borderRadius: ["8px 8px 0 0", "8px 0 0 8px"],
    display: "flex",
    flex: "1",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    minHeight: "300px",
  })
);

export default Enterprise;
