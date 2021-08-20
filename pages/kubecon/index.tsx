import Registration from "components/Registration";
import banner from "./assets/banner.svg";

const fullDescription =
  "You've been invited to join us for a special happy hour following KubeCon on Thursday, October 14th! Head over to HiDef Brewery starting at 5:30 for pizza, refreshments, and to take part in some friendly competition on the foosball table! HiDef Brewery is located at 1203 S Olive St, Los Angeles, CA 90015 and is about a 10 min walk from the LA Convention Center.";

const mobileDescription =
  "You're invited! Join us for a special happy hour following KubeCon at 5:30pm on Thursday, October 14th @ HiDef Brewery for pizza, refreshments, and foosball!\n\n1203 S Olive St, Los Angeles, CA 90015 (about a 10 min walk from the LA Convention Center).";

const KubeCon = () => {
  return (
    <Registration
      headTitle="KubeCon"
      headDescription="Register"
      mainImage={banner}
      title="KubeCon Happy Hour!"
      description={mobileDescription}
      CTA="Join the happy hour!"
      subCTA="Join us for a special happy hour following KubeCon on Thursday, October 14th!"
    ></Registration>
  );
};
export default KubeCon;
