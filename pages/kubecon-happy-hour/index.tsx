import Registration from "components/Registration";
import banner from "./assets/banner.svg";

const mobileDescription =
  "You're invited! Join us for a special happy hour following KubeCon at 5:30pm on Thursday, October 14th @ HiDef Brewery for pizza, refreshments, and foosball!\n\n1203 S Olive St, Los Angeles, CA 90015 (about a 10 min walk from the LA Convention Center).";

const KubeCon = () => {
  return (
    <Registration
      formID="1150"
      headTitle="KubeCon"
      headDescription="Register"
      mainImage={banner}
      title="Eat, Drink, and Connect!"
      description={mobileDescription}
      CTA="Join the happy hour!"
      subCTA="Join us for a special happy hour following KubeCon on Thursday, October 14th!"
    ></Registration>
  );
};
export default KubeCon;
