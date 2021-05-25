export interface Place {
  latitude: number;
  longitude: number;
  name: string;
  satellite?: boolean;
}

export default function getData(): Place[] {
  return [
    {
      latitude: 36.778259,
      longitude: -119.417931,
      name: "CA",
      satellite: true,
    },
    {
      latitude: 47.751076,
      longitude: -120.740135,
      name: "WA",
      satellite: true,
    },
    {
      latitude: 41.203323,
      longitude: -77.194527,
      name: "PA",
    },
    {
      latitude: 33.247875,
      longitude: -83.441162,
      name: "GA",
    },
    {
      latitude: 44.5,
      longitude: -89.5,
      name: "WI",
    },
    {
      latitude: 35.782169,
      longitude: -80.793457,
      name: "NC",
    },
    {
      latitude: 27.994402,
      longitude: -81.760254,
      name: "FL",
    },
    {
      latitude: 34.048927,
      longitude: -111.093735,
      name: "AZ",
    },
    {
      latitude: 40.0,
      longitude: -89.0,
      name: "IL",
    },
    {
      latitude: 38.573936,
      longitude: -92.60376,
      name: "MO",
    },
    {
      latitude: 33.836082,
      longitude: -81.163727,
      name: "SC",
    },
    {
      latitude: 39.833851,
      longitude: -74.871826,
      name: "NJ",
    },
    {
      latitude: 31.0,
      longitude: -100.0,
      name: "TX",
    },
    {
      latitude: 39.113014,
      longitude: -105.358887,
      name: "CO",
    },
    {
      latitude: 53.0,
      longitude: -70.0,
      name: "Quebec",
    },
    {
      latitude: 50.0,
      longitude: -85.0,
      name: "Ontario",
    },
    {
      latitude: 45.0,
      longitude: -63.0,
      name: "NS",
    },
    {
      latitude: 53.726669,
      longitude: -127.647621,
      name: "BC",
    },
    {
      latitude: 48.33333,
      longitude: 17.16667,
      name: "Bratislavský kraj",
    },
    {
      latitude: 60.8666632,
      longitude: 14.7333304,
      name: "Dalarna",
    },
    {
      latitude: 52.21039,
      longitude: 20.79716,
      name: "Mazowieckie",
    },
    {
      latitude: 54.68916,
      longitude: 25.2798,
      name: "Vilniaus apskritis",
    },
    {
      latitude: -23.533773,
      longitude: -46.62529,
      name: "SP",
    },
    {
      latitude: -37.0201,
      longitude: 144.9646,
      name: "VIC",
    },
  ];
}
