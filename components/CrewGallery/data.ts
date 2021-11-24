import { ImageProps } from "next/image";

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

export interface Photo {
  src: string;
  width: number;
  height: number;
}
interface Member {
  firstName: string;
  lastName: string;
  role: string;
  photos: Photo[];
}

const crew: Member[] = [
  {
    firstName: "Aleksandr",
    lastName: "Klizhentas",
    role: "CTO",
    photos: [
      {
        src: aleksandrKlizhentas,
        width: 1000,
        height: 667,
      },
    ],
  },
  {
    firstName: "Anna",
    lastName: "Radchenko",
    role: "Designer",
    photos: [
      { src: annaRadchenko, width: 1040, height: 1560 },
      { src: annaRadchenko2, width: 1040, height: 1560 },
    ],
  },
  {
    firstName: "Alex",
    lastName: "Wolfe",
    role: "VP of UX and Design",
    photos: [
      { src: alexWolfe, width: 750, height: 1000 },
      { src: alexWolfe2, width: 1000, height: 750 },
    ],
  },
  {
    firstName: "Alexandra",
    lastName: "Patane",
    role: "Mid market Account Executive",
    photos: [
      { src: alexandraPatane, width: 768, height: 960 },
      { src: alexandraPatane2, width: 750, height: 1000 },
    ],
  },
  {
    firstName: "Andrew",
    lastName: "Lytvynov",
    role: "Software Engineer",
    photos: [{ src: andrewLytvynov, width: 1365, height: 1024 }],
  },
  {
    firstName: "Bardia",
    lastName: "Shahali",
    role: "VP of Sales",
    photos: [{ src: bardiaShahali, width: 1008, height: 1334 }],
  },
  {
    firstName: "Brian",
    lastName: "Joerger",
    role: "Software Engineer",
    photos: [{ src: brianJoerger, width: 667, height: 500 }],
  },
  {
    firstName: "Ev",
    lastName: "Kontsevoy",
    role: "CEO",
    photos: [{ src: euguenyKontsevoy, width: 1560, height: 1040 }],
  },
  {
    firstName: "Isaiah",
    lastName: "Becker-Mayer",
    role: "Software Engineer",
    photos: [{ src: isaiahBeckerMayer, width: 193, height: 380 }],
  },
  {
    firstName: "Jay",
    lastName: "Perez",
    role: "Technical Support Engineer",
    photos: [{ src: jayPerez, width: 380, height: 380 }],
  },
  {
    firstName: "Jonathon",
    lastName: "Canada",
    role: "Sales Engineer",
    photos: [{ src: jonathonCanada, width: 375, height: 500 }],
  },
  {
    firstName: "Joshua",
    lastName: "Smith",
    role: "Enterprise Account Executive",
    photos: [{ src: joshuaSmith, width: 1029, height: 772 }],
  },
  {
    firstName: "Kafi",
    lastName: "Payne",
    role: "HR Director",
    photos: [
      { src: kafiPayne, width: 812, height: 1218 },
      { src: kafiPayne2, width: 800, height: 1200 },
    ],
  },
  {
    firstName: "Natalie",
    lastName: "Staudacher",
    role: "Customer Success Manager",
    photos: [{ src: natalieStaudacher, width: 513, height: 380 }],
  },
  {
    firstName: "Pierre",
    lastName: "Beaucamp",
    role: "Software Engineer",
    photos: [{ src: pierreBeaucamp, width: 1008, height: 1344 }],
  },
  {
    firstName: "Taylor",
    lastName: "Wakefield",
    role: "COO",
    photos: [
      { src: taylorWakefield, width: 1040, height: 1560 },
      { src: taylorWakefield2, width: 1008, height: 1344 },
    ],
  },
  {
    firstName: "Travis",
    lastName: "Swientek",
    role: "Head of Customer Success",
    photos: [
      { src: travisSwientek, width: 667, height: 500 },
      { src: travisSwientek2, width: 507, height: 380 },
    ],
  },
];

export default crew;
