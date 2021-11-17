import Flex from "components/Flex";
import NextImage from "next/image";
import pam from "./assets/pam2x.png";
import cert from "./assets/cert.png";

export const GreatPlaceImage = (
  <>
    {" "}
    <Flex zIndex={2} mr="-50px">
      <NextImage
        src={cert}
        alt="certification for great place to work"
        width={200}
        height={283}
      />
    </Flex>
    <NextImage
      src={pam}
      alt="Teleport's robot mascot Pam"
      width={277}
      height={283}
    />
  </>
);
