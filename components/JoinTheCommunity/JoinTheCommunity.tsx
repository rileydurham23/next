import css from "@styled-system/css";
import styled from "styled-components";

import Link from "components/Link";

const JoinTheCommunity = () => {
  return (
    <>
      <StyledJoinTitle>Join The Community</StyledJoinTitle>
      <StyledList>
        <li>
          <Link color="dark-purple" href="https://goteleport.com/slack">
            Slack
          </Link>
        </li>
        <li>
          <Link
            color="dark-purple"
            href="https://github.com/gravitational/teleport/discussions"
          >
            GitHub Discussions
          </Link>
        </li>
      </StyledList>
    </>
  );
};

const StyledJoinTitle = styled("p")(
  css({
    marginBottom: 2,
    marginTop: 8,
    textTransform: "uppercase",
  })
);

const StyledList = styled("ul")(
  css({
    marginTop: 0,
    paddingLeft: 4,
  })
);

export default JoinTheCommunity;
