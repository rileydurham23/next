import Registration from "components/Registration";
import sonos from "./assets/sonos.svg";

const ElasticONRaffle = () => {
  return (
    <Registration
      formID="1165"
      headTitle="ElasticON Speaker Raffle"
      headDescription="Register"
      mainImage={sonos}
      title="Win a Sonos speaker!"
      description="We'll send you the best of our blog and industry news."
      CTA="ElasticON Speaker Raffle"
      subCTA="Please sign up here for your chance to win a Sonos speaker!"
    />
  );
};
export default ElasticONRaffle;
