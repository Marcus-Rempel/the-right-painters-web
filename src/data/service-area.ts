export type ServiceRegion = {
  state: string;
  description: string;
  cities: string[];
};

export const serviceAreaFacts = {
  hubCity: "Chattanooga, TN",
  regionName: "TAG Corner",
  regionLabel: "TAG Corner tri-state area",
  radiusMiles: 50,
  radiusMeters: 80467,
} as const;

export const serviceAreaRegions: ServiceRegion[] = [
  {
    state: "Tennessee",
    description:
      "Our home base. We cover the greater Chattanooga metro and surrounding communities across Hamilton, Bradley, Marion, Sequatchie, and Grundy counties.",
    cities: [
      "Chattanooga",
      "Signal Mountain",
      "Red Bank",
      "Hixson",
      "Soddy-Daisy",
      "Ooltewah",
      "Collegedale",
      "East Ridge",
      "Lookout Mountain, TN",
      "Cleveland",
      "Jasper",
      "South Pittsburg",
      "Monteagle",
    ],
  },
  {
    state: "Georgia",
    description:
      "The northwest Georgia corner of the TAG region, from the Chickamauga Valley up through Lookout Mountain and into Dade and Walker counties.",
    cities: [
      "Fort Oglethorpe",
      "Ringgold",
      "Chickamauga",
      "Trenton",
      "Lookout Mountain, GA",
      "Rossville",
      "LaFayette",
      "Rock Spring",
    ],
  },
  {
    state: "Alabama",
    description:
      "The northeast Alabama communities along the Tennessee River and up through the Cumberland Plateau in Jackson and DeKalb counties.",
    cities: [
      "Scottsboro",
      "Bridgeport",
      "Stevenson",
      "Fort Payne",
      "Rainsville",
      "Section",
    ],
  },
];
