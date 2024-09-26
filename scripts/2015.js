const year = 2020
const needStroke = false;

const results = [
  {
    name: "Bukit Batok",
    votes: [
      {
        name: "PAP",
        percent: 73.02,
      },
      {
        name: "SDP",
        percent: 26.38,
      },
      {
        name: "Indp.",
        percent: 0.60,
      }
    ],
    seats: 1,
  },
  {
    name: "Bukit Panjang",
    votes: [
      {
        name: "PAP",
        percent: 68.38,
      },
      {
        name: "SDP",
        percent: 31.62,
      },
    ],
    seats: 1,
  },
  {
    name: "Fengshan",
    votes: [
      {
        name: "PAP",
        percent: 57.50,
      },
      {
        name: "WP",
        percent: 42.50,
      },
    ],
    seats: 1,
  },
  {
    name: "Hong Kah North",
    votes: [
      {
        name: "PAP",
        percent: 74.76,
      },
      {
        name: "SPP",
        percent: 25.24,
      },
    ],
    seats: 1,
  },
  {
    name: "Hougang",
    votes: [
      {
        name: "PAP",
        percent: 42.34,
      },
      {
        name: "WP",
        percent: 57.66,
      },
    ],
    seats: 1,
  },
  {
    name: "MacPherson",
    votes: [
      {
        name: "PAP",
        percent: 65.60,
      },
      {
        name: "WP",
        percent: 33.59,
      },
      {
        name: "NSP",
        percent: 0.82,
      },
    ],
    seats: 1,
  },
  {
    name:"Mountbatten",
    votes: [
      {
        name: "PAP",
        percent: 71.86,
      },
      {
        name: "SPP",
        percent: 28.14,
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
        percent: 76.35,
      },
      {
        name: "NSP",
        percent: 23.65,
      },
    ],
    seats: 1,
  },
  {
    name: "Potong Pasir",
    votes: [
      {
        name: "PAP",
        percent: 66.39,
      },
      {
        name: "SPP",
        percent: 33.61,
      },
    ],
    seats: 1,
  },
  {
    name: "Punggol East",
    votes: [
      {
        name: "PAP",
        percent: 51.77,
      },
      {
        name: "WP",
        percent: 48.23,
      },
    ],
    seats: 1,
  },
  {
    name: "Radin Mas",
    votes: [
      {
        name: "PAP",
        percent: 77.25,
      },
      {
        name: "Reform",
        percent: 12.72,
      },
      {
        name: "Indp.",
        percent: 10.03,
      },
    ],
    seats: 1,
  },
  {
    name: "Sengkang West",
    votes: [
      {
        name: "PAP",
        percent: 62.13,
      },
      {
        name: "WP",
        percent: 37.87,
      },
    ],
    seats: 1,
  },
  {
    name: "Yuhua",
    votes: [
      {
        name: "PAP",
        percent: 73.55,
      },
      {
        name: "SDP",
        percent: 26.45,
      },
    ],
    seats: 1,
  },
  {
    name: "Bishan-Toa Payoh",
    votes: [
      {
        name: "PAP",
        percent: 73.59,
      },
      {
        name: "SPP",
        percent: 26.41,
      },
    ],
    seats: 5,
  },
  {
    name: "Chua Chu Kang",
    votes: [
      {
        name: "PAP",
        percent: 76.91,
      },
      {
        name: "PPP",
        percent: 23.09,
      },
    ],
    seats: 4,
  },
  {
    name: "Holland-Bukit Timah",
    votes: [
      {
        name: "PAP",
        percent: 66.60,
      },
      {
        name: "SDP",
        percent: 33.40,
      },
    ],
    seats: 4,
  },
  {
    name: "Jalan Besar",
    votes: [
      {
        name: "PAP",
        percent: 67.75,
      },
      {
        name: "WP",
        percent: 32.25,
      },
    ],
    seats: 4,
  },
  {
    name: "Marsiling-Yew Tee",
    votes: [
      {
        name: "PAP",
        percent: 68.73,
      },
      {
        name: "WP",
        percent: 31.27,
      },
    ],
    seats: 4,
  },
  {
    name: "Aljunied",
    votes: [
      {
        name: "PAP",
        percent: 49.04,
      },
      {
        name: "WP",
        percent: 50.96,
      },
    ],
    seats: 5,
  },
  {
    name: "Ang Mo Kio",
    votes: [
      {
        name: "PAP",
        percent: 78.64,
      },
      {
        name: "Reform",
        percent: 21.36,
      },
    ],
    seats: 6,
  },
  {
    name: "East Coast",
    votes: [
      {
        name: "PAP",
        percent: 60.73,
      },
      {
        name: "WP",
        percent: 39.27,
      },
    ],
    seats: 4,
  },
  {
    name: "Jurong",
    votes: [
      {
        name: "PAP",
        percent: 79.29,
      },
      {
        name: "SingFirst",
        percent: 20.71,
      },
    ],
    seats: 5,
  },
  {
    name: "Marine Parade",
    votes: [
      {
        name: "PAP",
        percent: 64.07,
      },
      {
        name: "WP",
        percent: 35.93,
      },
    ],
    seats: 5,
  },
  {
    name: "Nee Soon",
    votes: [
      {
        name: "PAP",
        percent: 66.83,
      },
      {
        name: "PSP",
        percent: 33.17,
      },
    ],
    seats: 5,
  },
  {
    name: "Pasir Ris-Punggol",
    votes: [
      {
        name: "PAP",
        percent: 72.89,
      },
      {
        name: "SDA",
        percent: 27.11,
      },
    ],
    seats: 6,
  },
  {
    name: "Sembawang",
    votes: [
      {
        name: "PAP",
        percent: 72.28,
      },
      {
        name: "NSP",
        percent: 27.72,
      },
    ],
    seats: 5,
  },
  {
    name: "Tampines",
    votes: [
      {
        name: "PAP",
        percent: 72.07,
      },
      {
        name: "NSP",
        percent: 27.93,
      },
    ],
    seats: 5,
  },
  {
    name: "Tanjong Pagar",
    votes: [
      {
        name: "PAP",
        percent: 77.71,
      },
      {
        name: "SingFirst",
        percent: 22.29,
      },
    ],
    seats: 5,
  },
  {
    name: "West Coast",
    votes: [
      {
        name: "PAP",
        percent: 78.57,
      },
      {
        name: "Reform",
        percent: 21.43,
      },
    ],
    seats: 4,
  },
];
