import Registration from "components/Registration";
import sonos from "./assets/sonos.svg";

const KubeConRaffle = () => {
  return (
    <Registration
      formID="1167"
      headTitle="KubeCon Speaker Raffle"
      headDescription="Register"
      mainImage={sonos}
      title="Win a Sonos speaker!"
      description="We'll send you the best of our blog and industry news."
      CTA="KubeCon Speaker Raffle"
      subCTA="Please sign up here for your chance to win a Sonos speaker!"
    ></Registration>
  );
};
export default KubeConRaffle;
