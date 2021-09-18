import Registration from "components/Registration";
import socks from "./assets/socks.svg";

const KubeCon = () => {
  return (
    <Registration
      formID="1151"
      headTitle="Houston Devopsdays Give Away!"
      headDescription="Register"
      mainImage={socks}
      title="Get Free Socks!"
      description="Get free Teleport socks by signing up for our newsletter. We'll send you the best of our blog and industry news."
      CTA="Welcome Houston Devopsdays!"
      subCTA="Sign up for our the Teleport newsletter and get free socks!"
    ></Registration>
  );
};
export default KubeCon;
