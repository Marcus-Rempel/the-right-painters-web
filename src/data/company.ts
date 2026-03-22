type BusinessHours = {
  label: string;
  shortLabel: string;
  dayOfWeek: string[];
  opens: string | null;
  closes: string | null;
  display: string;
  shortDisplay: string;
};

export const company: {
  name: string;
  websiteUrl: string;
  phone: {
    display: string;
    href: string;
    international: string;
  };
  email: {
    address: string;
    href: string;
  };
  responseTime: {
    hours: number;
    label: string;
  };
  hours: BusinessHours[];
  stats: {
    yearsInBusiness: {
      display: string;
      detail: string;
    };
    homesPainted: {
      display: string;
    };
    rating: {
      display: string;
      value: number;
    };
    reviewCount: {
      display: string;
      value: number;
    };
  };
} = {
  name: "The Right Painters",
  websiteUrl: "https://therightpainters.com",
  phone: {
    display: "(423) 380-8107",
    href: "tel:+14233808107",
    international: "+1-423-380-8107",
  },
  email: {
    address: "hello@therightpainters.com",
    href: "mailto:hello@therightpainters.com",
  },
  responseTime: {
    hours: 24,
    label: "within 24 hours",
  },
  hours: [
    {
      label: "Monday - Friday",
      shortLabel: "Mon-Fri",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
      display: "7:00am - 6:00pm",
      shortDisplay: "7am-6pm",
    },
    {
      label: "Saturday",
      shortLabel: "Sat",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
      display: "8:00am - 2:00pm",
      shortDisplay: "8am-2pm",
    },
    {
      label: "Sunday",
      shortLabel: "Sun",
      dayOfWeek: ["Sunday"],
      opens: null,
      closes: null,
      display: "Closed",
      shortDisplay: "Closed",
    },
  ],
  stats: {
    yearsInBusiness: {
      display: "15+",
      detail: "Serving the TAG Corner area",
    },
    homesPainted: {
      display: "800+",
    },
    rating: {
      display: "4.9",
      value: 4.9,
    },
    reviewCount: {
      display: "127",
      value: 127,
    },
  },
};

export const weekdayHours = company.hours[0]!;
export const saturdayHours = company.hours[1]!;
export const sundayHours = company.hours[2]!;

export const hoursSummary = `${weekdayHours.shortLabel} ${weekdayHours.shortDisplay}, ${saturdayHours.shortLabel} ${saturdayHours.shortDisplay}`;
