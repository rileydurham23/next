import aleksandrKlizhentas from "./crew/aleksandr_klizhentas.jpg";
import alexWolfe from "./crew/alex_wolfe.jpg";
import alexWolfe2 from "./crew/alex_wolfe_2.jpg";
import alexandraPatane from "./crew/alexandra_patane.jpg";
import alexandraPatane2 from "./crew/alexandra_patane_2.jpg";
import andrewLytvynov from "./crew/andrew_lytvynov.jpg";
import annaRadchenko from "./crew/anna_radchenko.jpg";
import annaRadchenko2 from "./crew/anna_radchenko_2.jpg";
import bardiaShahali from "./crew/bardia_shahali.jpg";
import brianJoerger from "./crew/brian_joerger.jpg";
import euguenyKontsevoy from "./crew/eugueny_kontsevoy.jpg";
import isaiahBeckerMayer from "./crew/isaiah_becker_mayer.jpg";
import jayPerez from "./crew/jay_perez.jpg";
import jonathonCanada from "./crew/jonathon_canada.jpg";
import joshuaSmith from "./crew/joshua_smith.jpg";
import kafiPayne from "./crew/kafi_payne.jpg";
import kafiPayne2 from "./crew/kafi_payne_2.jpg";
import natalieStaudacher from "./crew/natalie_staudacher.jpg";
import pierreBeaucamp from "./crew/pierre_beaucamp.jpg";
import taylorWakefield from "./crew/taylor_wakefield.jpg";
import taylorWakefield2 from "./crew/taylor_wakefield_2.jpg";
import travisSwientek from "./crew/travis_swientek.jpg";
import travisSwientek2 from "./crew/travis_swientek_2.jpg";

interface Member {
  firstName: string;
  lastName: string;
  role: string;
  photos: string[];
}

const crew: Member[] = [
  {
    firstName: "Aleksandr",
    lastName: "Klizhentas",
    role: "CTO",
    photos: [aleksandrKlizhentas],
  },
  {
    firstName: "Anna",
    lastName: "Radchenko",
    role: "Designer",
    photos: [annaRadchenko, annaRadchenko2],
  },
  {
    firstName: "Alex",
    lastName: "Wolfe",
    role: "VP of UX and Design",
    photos: [alexWolfe, alexWolfe2],
  },
  {
    firstName: "Alexandra",
    lastName: "Patane",
    role: "Mid market Account Executive",
    photos: [alexandraPatane, alexandraPatane2],
  },
  {
    firstName: "Andrew",
    lastName: "Lytvynov",
    role: "Software Engineer",
    photos: [andrewLytvynov],
  },
  {
    firstName: "Bardia",
    lastName: "Shahali",
    role: "VP of Sales",
    photos: [bardiaShahali],
  },
  {
    firstName: "Brian",
    lastName: "Joerger",
    role: "Software Engineer",
    photos: [brianJoerger],
  },
  {
    firstName: "Ev",
    lastName: "Kontsevoy",
    role: "CEO",
    photos: [euguenyKontsevoy],
  },
  {
    firstName: "Isaiah",
    lastName: "Becker-Mayer",
    role: "Software Engineer",
    photos: [isaiahBeckerMayer],
  },
  {
    firstName: "Jay",
    lastName: "Perez",
    role: "Technical Support Engineer",
    photos: [jayPerez],
  },
  {
    firstName: "Jonathon",
    lastName: "Canada",
    role: "Sales Engineer",
    photos: [jonathonCanada],
  },
  {
    firstName: "Joshua",
    lastName: "Smith",
    role: "Enterprise Account Executive",
    photos: [joshuaSmith],
  },
  {
    firstName: "Kafi",
    lastName: "Payne",
    role: "HR Director",
    photos: [kafiPayne, kafiPayne2],
  },
  {
    firstName: "Natalie",
    lastName: "Staudacher",
    role: "Customer Success Manager",
    photos: [natalieStaudacher],
  },
  {
    firstName: "Pierre",
    lastName: "Beaucamp",
    role: "Software Engineer",
    photos: [pierreBeaucamp],
  },
  {
    firstName: "Taylor",
    lastName: "Wakefield",
    role: "COO",
    photos: [taylorWakefield, taylorWakefield2],
  },
  {
    firstName: "Travis",
    lastName: "Swientek",
    role: "Head of Customer Success",
    photos: [travisSwientek, travisSwientek2],
  },
];

export default crew;
