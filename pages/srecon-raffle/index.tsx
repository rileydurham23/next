import Registration from "components/Registration";
import sonos from "./assets/sonos.svg";

const SREConRaffle = () => {
  return (
    <Registration
      formID="1172"
      headTitle="SRECon Speaker Raffle"
      headDescription="Register"
      mainImage={sonos}
      title="Win a Sonos speaker!"
      description="We'll send you the best of our blog and industry news."
      CTA="SRECon Speaker Raffle"
      subCTA="Please sign up here for your chance to win a Sonos speaker!"
    ></Registration>
  );
};
export default SREConRaffle;
