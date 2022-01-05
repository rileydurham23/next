import css from "@styled-system/css";
import styled, { css as styledCss } from "styled-components";
import { useState, ChangeEvent, FormEvent } from "react";
import TextArea from "components/TextArea";
import Button from "components/Button";
import Label from "components/Label";
import Box from "components/Box";
import Flex from "components/Flex";
import { StyledSystemProps } from "components/system";
import { AnimatedFadeIn } from "components/AnimationUtilities/AnimationUtilities";

export interface CertCardProps {
  certInfo: string;
}

export const CertCard = ({ certInfo }: CertCardProps) => {
  return (
    <StyledAnimatedBox>
      <StyledH3>Certificate Info</StyledH3>
      <Box fontSize="text-lg" lineHeight="sm" mt={2}>
        <pre dangerouslySetInnerHTML={{ __html: certInfo }}></pre>
      </Box>
    </StyledAnimatedBox>
  );
};

export interface IntructionsProps {
  handleClick: () => void;
}

export const Instructions = ({ handleClick }: IntructionsProps) => {
  return (
    <>
      <StyledLabel id="info">instructions</StyledLabel>
      <StyledOl>
        <StyledLi>Paste Cert into text area</StyledLi>
        <StyledLi>Press &#34;Parse SSH Certificate&#34; button</StyledLi>
        <StyledLi>Cert info will be displayed</StyledLi>
      </StyledOl>
      <Button
        onClick={handleClick}
        variant="secondary"
        width={["100%", "auto"]}
        mb={2}
      >
        Test using an Example Cert
      </Button>
    </>
  );
};

const exampleCert =
  "ssh-rsa-cert-v01@openssh.com AAAAHHNzaC1yc2EtY2VydC12MDFAb3BlbnNzaC5jb20AAAAghDSGfd873gnsduMZuiVieXveBUfUX+VirAUxfAK4EI0AAAADAQABAAABAQDMwmPFwJ19HuDECRHtqRXRE0v+uYFX2wGcDTq80mssuMfj6c4BxF1KSCqu2vXZv9AWdkpG0wcP59qyygwGrpg3c58X+Qm7MwuHL8tKGAhJvQwNQfVRIzAwnI41AiYlG6JW0BrMHFL4pV7l3d2xIGLiZ0tXDTshZ5wwLxBV1qQXcq8g2BGNbt/MlDjtvu6hNoxpVhR3iAbjg1rFx2LlAO5TegKz2NmZkrE32JFmZsZKHNPC/Bls2891XopGyaxazL/5v2lfARZgpRiMKKFiGCfGaa4MeTpFAiEaP3xUqplxvOX9JAruEliQ1q88dmSpGfQ9G+PqcmTAiWJLio0kxdnvAAAAAAAAAAAAAAABAAAACWtvbnRzZXZveQAAADQAAAAKZWtvbnRzZXZveQAAAAZyam9uZXMAAAAEcm9vdAAAAAl0a2FjaGVua28AAAADb3BzAAAAAAAAAAAAAAAAW8YobAAAAAAAAACLAAAAF3Blcm1pdC1hZ2VudC1mb3J3YXJkaW5nAAAAAAAAABZwZXJtaXQtcG9ydC1mb3J3YXJkaW5nAAAAAAAAAApwZXJtaXQtcHR5AAAAAAAAAA50ZWxlcG9ydC1yb2xlcwAAACYAAAAieyJ2ZXJzaW9uIjoidjEiLCJyb2xlcyI6WyJhZG1pbiJdfQAAAAAAAAEXAAAAB3NzaC1yc2EAAAADAQABAAABAQDROVFN1t79ShOd1j/BzrmhSwVbouUVhUK5AXGtwFmfTpFpOaz60swllVIQht6FD9Ou8JBcQeYmmCipECqyo3GnTPoDXtYAMVFpp4YBpfvbV/ceT2SOU+FY6PSjhjh0aDvyFNw1dcsfahtjLJrS9bPpphg3KjIq6/hEFNIwmRXePlLjoNQ8RPm6AJocPE54BQySCjncTQ/VrSdZCG9Wqor7h2uRumrGlaA3kzjCFtvYoZNjz9CenDTjh4fxw+kZQwxnfO8b9Oc7i4/5tgRlUb0vPE9TXDQj2fLbwpq0BvsOI1czwr1gXNN5XnhxPTpRdMgby9vWnEGhJ1W0JupMp5gDAAABDwAAAAdzc2gtcnNhAAABAK12AHq9GsgkYT3aXr6g+kX02k44+q6LyuFBsvBBRm81qgEesa4aEFMfsD7NSC/fRu5YFi6K2fK25vDCq0SEIQW835Ziin+jWKYufnv2N+MDHAcoaJbXnd+jCIVLt8FGlnsakJN41nsKze7DFCzHRXbOl5E1/ofvTBDqfjYUIkVvBDUyJukre0PbAuoNwetsBmeZz/KJoTMSXycdRGuHoUf0Z95PQzk++wwhLNg+/uGqp5mTbNyTYAmR6QkRaQCAn6KUZP3jpdY8RaWbXMEYBi3DPYz3MgsXNTtr1TR0iwOiSCKKaoz9k5AUcBWDP32a8ocuJUBtoawng5u2EE8jIlE=";

const url = `https://dashboard.gravitational.com/webapi/parse/certificate`;

const SSHParser = () => {
  const [formText, setFormText] = useState("");
  const [showCert, setShowCert] = useState(false);
  const [certInfo, setCertInfo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const formButtonText = isDisabled ? "One Moment..." : "Parse SSH Certificate";
  const labelMessage = errorMessage ? errorMessage : "Enter an SSH Certificate";

  const useExampleCert = () => {
    setFormText(exampleCert);
  };

  async function parseCert(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsDisabled(true);

    const initObj = {
      method: "POST",
      body: JSON.stringify({ cert: formText }),
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Accept: "json",
      },
    };

    try {
      const response = await fetch(url, initObj);
      const json = await response.json();

      if (json.message) {
        setErrorMessage(json.message);
      } else {
        setErrorMessage("");
        setCertInfo(json);
        setShowCert(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsDisabled(false);
    }
  }

  return (
    <Box width="1240px">
      <Flex flexDirection="column">
        {showCert && <CertCard certInfo={certInfo} />}
        <Flex
          flexDirection={["column-reverse", "row"]}
          alignContent="flex-start"
        >
          <StyledForm onSubmit={parseCert}>
            <StyledLabel id="ssh" color={errorMessage}>
              {labelMessage}
              <StyledTextArea
                borderColor={errorMessage}
                id="ssh"
                placeholder="Paste your ssh certificate here..."
                value={formText}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormText(e.target.value)
                }
                rows={9}
              />
            </StyledLabel>
            <Button
              type="submit"
              shape="lg"
              disabled={isDisabled}
              width={["100%", "auto"]}
              mb={[2, 0]}
              mt={[0, 3]}
            >
              {formButtonText}
            </Button>
          </StyledForm>

          <Box flexBasis="33%" pb={2} pl={[0, 3]}>
            <Instructions handleClick={useExampleCert} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

const StyledAnimatedBox = styled(AnimatedFadeIn)(
  css({
    color: "black",
    fontFamily: "monospace",
    boxShadow: "0 8px 64px rgb(0 0 0 / 12%)",
    zIndex: "1",
    mb: [5, 7],
    bg: "white",
    borderRadius: "lg",
    padding: [3, 11],
    overflow: "auto",
  })
);

const StyledForm = styled("form")<StyledSystemProps>(
  css({
    flexBasis: "66.666667%",
    boxSizing: "border-box",
    pr: [0, 3],
    pb: 2,
  })
);

const StyledTextArea = styled(TextArea)((props) => [
  css({
    color: "darkest",
    display: "block",
    fontSize: "text-xl",
    fontWeight: "regular",
    lineHeight: "md",
    minHeight: "112px",
    mb: 2,
    padding: 2,
    width: "100%",
  }),
  styledCss`border-color: ${props["borderColor"] && "red"};`,
  styledCss`background: ${props["borderColor"] && "rgba(245, 0, 87, 0.04);"};`,
]);

const StyledLabel = styled(Label)((props) => [
  css({
    display: "block",
    fontSize: "text-sm",
    lineHeight: "md",
    textTransform: "uppercase",
  }),
  styledCss`color: ${props["color"] ? "red" : "darkest"};`,
]);

const StyledOl = styled("ol")<StyledSystemProps>(
  css({
    my: 0,
    ml: -2,
  })
);

const StyledLi = styled("li")<StyledSystemProps>(
  css({
    fontSize: "text-lg",
    fontWeight: "regular",
    lineHeight: "lg",
    ml: -2,
    mb: 2,
  })
);

const StyledH3 = styled("h3")<StyledSystemProps>(
  css({
    fontFamily: "body",
    fontSize: ["header-3", "header-1"],
    mt: 0,
    mb: [2, 3],
    textTransform: "uppercase",
    lineHeight: ["xl", "xxl"],
  })
);

export default SSHParser;
