import Registration from "components/Registration";
import cocktails from "./assets/cocktails.svg";

const dinnerDescription = `Join our CEO Ev Kontsevoy, alongside other members of our team, for cocktails, dinner, and sweeping views of the San Francisco bay on Thursday October 21st at AtWater Tavern. 

Cocktails and hors d'oeuvres start at 5:00pm followed by a sit down dinner at 6:00pm.

AtWater Tavern is located at 295 Terry A. Francois Blvd, San Francisco, CA 94518 - a 12 minute walk from CalTrain. Your RSVP will also a include Lyft code to make it even easier!`;

const JoinUs = () => {
  return (
    <Registration
      formID="1160"
      headTitle="Join Us for Dinner"
      headDescription="Register"
      mainImage={cocktails}
      title="You're invited!"
      description={dinnerDescription}
      CTA="Join Us for Dinner"
      subCTA="Limited seating is available so please RSVP to secure your spot!"
    />
  );
};
export default JoinUs;
