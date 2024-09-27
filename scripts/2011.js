const year = 2011

const results = [
  {
    name: "Bukit Panjang",
    votes: [
      {
        name: "PAP",
        percent: 66.27,
      },
      {
        name: "SDP",
        percent: 33.73,
      },
    ],
    seats: 1,
  },
  {
    name: "Hong Kah North",
    votes: [
      {
        name: "PAP",
        percent: 70.61,
      },
      {
        name: "SPP",
        percent: 29.39,
      },
    ],
    seats: 1,
  },
  {
    name: "Hougang",
    votes: [
      {
        name: "PAP",
        percent: 35.2,
      },
      {
        name: "WP",
        percent: 64.8,
      },
    ],
    seats: 1,
  },
  {
    name: "Joo Chiat",
    votes: [
      {
        name: "PAP",
        percent: 51.02,
      },
      {
        name: "WP",
        percent: 48.98,
      },
    ],
    seats: 1,
  },
  {
    name: "Mountbatten",
    votes: [
      {
        name: "PAP",
        percent: 58.62,
      },
      {
        name: "NSP",
        percent: 41.38,
      },
    ],
    opp: "PV",
    seats: 1,
  },
  {
    name: "Pioneer",
    votes: [
      {
        name: "PAP",
        percent: 60.73,
      },
      {
        name: "NSP",
        percent: 39.27,
      },
    ],
    seats: 1,
  },
  {
    name: "Potong Pasir",
    votes: [
      {
        name: "PAP",
        percent: 50.36,
      },
      {
        name: "SPP",
        percent: 49.64,
      },
    ],
    seats: 1,
  },
  {
    name: "Punggol East",
    votes: [
      {
        name: "PAP",
        percent: 54.54,
      },
      {
        name: "WP",
        percent: 41.01,
      },
      {
        name: "SDA",
        percent: 4.45,
      },
    ],
    seats: 1,
  },
  {
    name: "Radin Mas",
    votes: [
      {
        name: "PAP",
        percent: 67.1,
      },
      {
        name: "NSP",
        percent: 32.9,
      },
    ],
    seats: 1,
  },
  {
    name: "Sengkang West",
    votes: [
      {
        name: "PAP",
        percent: 58.11,
      },
      {
        name: "WP",
        percent: 41.89,
      },
    ],
    seats: 1,
  },
  {
    name: "Whampoa",
    votes: [
      {
        name: "PAP",
        percent: 66.1,
      },
      {
        name: "NSP",
        percent: 33.9,
      },
    ],
    seats: 1,
  },
  {
    name: "Yuhua",
    votes: [
      {
        name: "PAP",
        percent: 66.86,
      },
      {
        name: "SDP",
        percent: 33.14,
      },
    ],
    seats: 1,
  },
  {
    name: "Bishan-Toa Payoh",
    votes: [
      {
        name: "PAP",
        percent: 56.93,
      },
      {
        name: "SPP",
        percent: 43.07,
      },
    ],
    seats: 5,
  },
  {
    name: "Chua Chu Kang",
    votes: [
      {
        name: "PAP",
        percent: 61.2,
      },
      {
        name: "NSP",
        percent: 38.8,
      },
    ],
    seats: 5,
  },
  {
    name: "Holland-Bukit Timah",
    votes: [
      {
        name: "PAP",
        percent: 60.08,
      },
      {
        name: "SDP",
        percent: 39.92,
      },
    ],
    seats: 4,
  },
  {
    name: "Moulmein-Kallang",
    votes: [
      {
        name: "PAP",
        percent: 58.55,
      },
      {
        name: "WP",
        percent: 41.45,
      },
    ],
    seats: 4,
  },
  {
    name: "Aljunied",
    votes: [
      {
        name: "PAP",
        percent: 45.28,
      },
      {
        name: "WP",
        percent: 54.72,
      },
    ],
    seats: 5,
  },
  {
    name: "Ang Mo Kio",
    votes: [
      {
        name: "PAP",
        percent: 69.33,
      },
      {
        name: "Reform",
        percent: 30.67,
      },
    ],
    seats: 6,
  },
  {
    name: "East Coast",
    votes: [
      {
        name: "PAP",
        percent: 54.83,
      },
      {
        name: "WP",
        percent: 45.17,
      },
    ],
    seats: 5,
  },
  {
    name: "Jurong",
    votes: [
      {
        name: "PAP",
        percent: 66.96,
      },
      {
        name: "NSP",
        percent: 33.04,
      },
    ],
    seats: 5,
  },
  {
    name: "Marine Parade",
    votes: [
      {
        name: "PAP",
        percent: 56.64,
      },
      {
        name: "NSP",
        percent: 43.36,
      },
    ],
    seats: 5,
  },
  {
    name: "Nee Soon",
    votes: [
      {
        name: "PAP",
        percent: 58.4,
      },
      {
        name: "WP",
        percent: 41.6,
      },
    ],
    seats: 5,
  },
  {
    name: "Pasir Ris-Punggol",
    votes: [
      {
        name: "PAP",
        percent: 64.79,
      },
      {
        name: "SDA",
        percent: 35.21,
      },
    ],
    seats: 6,
  },
  {
    name: "Sembawang",
    votes: [
      {
        name: "PAP",
        percent: 63.9,
      },
      {
        name: "NSP",
        percent: 36.1,
      },
    ],
    seats: 5,
  },
  {
    name: "Tampines",
    votes: [
      {
        name: "PAP",
        percent: 57.22,
      },
      {
        name: "NSP",
        percent: 42.78,
      },
    ],
    seats: 5,
  },
  {
    name: "Tanjong Pagar",
    votes: [
      {
        name: "PAP",
        percent: 100,
      },
    ],
    seats: 5,
  },
  {
    name: "West Coast",
    votes: [
      {
        name: "PAP",
        percent: 66.57,
      },
      {
        name: "Reform",
        percent: 33.43,
      },
    ],
    seats: 5,
  },
];
