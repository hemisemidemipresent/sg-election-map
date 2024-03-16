const year = 2020
const needStroke = false;

const results = [
  {
    name: "Bukit Batok",
    votes: [
      {
        name: "PAP",
        percent: 54.8,
      },
      {
        name: "SDP",
        percent: 45.2,
      },
    ],
    seats: 1,
  },
  {
    name: "Bukit Panjang",
    votes: [
      {
        name: "PAP",
        percent: 53.73,
      },
      {
        name: "SDP",
        percent: 46.27,
      },
    ],
    seats: 1,
  },
  {
    name: "Hong Kah North",
    votes: [
      {
        name: "PAP",
        percent: 60.99,
      },
      {
        name: "PSP",
        percent: 39.01,
      },
    ],
    seats: 1,
  },
  {
    name: "Hougang",
    votes: [
      {
        name: "PAP",
        percent: 38.79,
      },
      {
        name: "WP",
        percent: 61.21,
      },
    ],
    seats: 1,
  },
  {
    name: "Kebun Baru",
    votes: [
      {
        name: "PAP",
        percent: 62.92,
      },
      {
        name: "PSP",
        percent: 37.08,
      },
    ],
    seats: 1,
  },
  {
    name: "MacPherson",
    votes: [
      {
        name: "PAP",
        percent: 71.74,
      },
      {
        name: "PPP",
        percent: 28.26,
      },
    ],
    seats: 1,
  },
  {
    name: "Marymount",
    votes: [
      {
        name: "PAP",
        percent: 55.04,
      },
      {
        name: "PSP",
        percent: 44.96,
      },
    ],
    seats: 1,
  },
  {
    name:"Mountbatten",
    votes: [
      {
        name: "PAP",
        percent: 73.82,
      },
      {
        name: "PV",
        percent: 26.18,
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
        percent: 62,
      },
      {
        name: "PSP",
        percent: 35.22,
      },
      {
        name: "Independent",
        percent: 2.78,
      },
    ],
    seats: 1,
  },
  {
    name: "Potong Pasir",
    votes: [
      {
        name: "PAP",
        percent: 60.67,
      },
      {
        name: "SPP",
        percent: 39.33,
      },
    ],
    seats: 1,
  },
  {
    name: "Punggol West",
    votes: [
      {
        name: "PAP",
        percent: 60.98,
      },
      {
        name: "WP",
        percent: 39.02,
      },
    ],
    seats: 1,
  },
  {
    name: "Radin Mas",
    votes: [
      {
        name: "PAP",
        percent: 74.01,
      },
      {
        name: "Reform",
        percent: 25.99,
      },
    ],
    seats: 1,
  },
  {
    name: "Yio Chu Kang",
    votes: [
      {
        name: "PAP",
        percent: 60.82,
      },
      {
        name: "PSP",
        percent: 39.18,
      },
    ],
    seats: 1,
  },
  {
    name: "Yuhua",
    votes: [
      {
        name: "PAP",
        percent: 70.54,
      },
      {
        name: "SDP",
        percent: 29.46,
      },
    ],
    seats: 1,
  },
  {
    name: "Bishan-Toa Payoh",
    votes: [
      {
        name: "PAP",
        percent: 67.23,
      },
      {
        name: "SPP",
        percent: 32.77,
      },
    ],
    seats: 4,
  },
  {
    name: "Chua Chu Kang",
    votes: [
      {
        name: "PAP",
        percent: 58.64,
      },
      {
        name: "PSP",
        percent: 41.36,
      },
    ],
    seats: 4,
  },
  {
    name: "Holland-Bukit Timah",
    votes: [
      {
        name: "PAP",
        percent: 66.36,
      },
      {
        name: "SDP",
        percent: 33.64,
      },
    ],
    seats: 4,
  },
  {
    name: "Jalan Besar",
    votes: [
      {
        name: "PAP",
        percent: 65.36,
      },
      {
        name: "PV",
        percent: 34.64,
      },
    ],
    seats: 4,
  },
  {
    name: "Marsiling-Yew Tee",
    votes: [
      {
        name: "PAP",
        percent: 63.18,
      },
      {
        name: "SDP",
        percent: 36.82,
      },
    ],
    seats: 4,
  },
  {
    name: "Sengkang",
    votes: [
      {
        name: "PAP",
        percent: 47.88,
      },
      {
        name: "WP",
        percent: 52.12,
      },
    ],
    seats: 4,
  },
  {
    name: "Aljunied",
    votes: [
      {
        name: "PAP",
        percent: 40.05,
      },
      {
        name: "WP",
        percent: 59.95,
      },
    ],
    seats: 5,
  },
  {
    name: "Ang Mo Kio",
    votes: [
      {
        name: "PAP",
        percent: 71.91,
      },
      {
        name: "Reform",
        percent: 28.09,
      },
    ],
    seats: 5,
  },
  {
    name: "East Coast",
    votes: [
      {
        name: "PAP",
        percent: 53.39,
      },
      {
        name: "WP",
        percent: 46.61,
      },
    ],
    seats: 5,
  },
  {
    name: "Jurong",
    votes: [
      {
        name: "PAP",
        percent: 74.61,
      },
      {
        name: "RDU",
        percent: 25.39,
      },
    ],
    seats: 5,
  },
  {
    name: "Marine Parade",
    votes: [
      {
        name: "PAP",
        percent: 57.74,
      },
      {
        name: "WP",
        percent: 42.26,
      },
    ],
    seats: 5,
  },
  {
    name: "Nee Soon",
    votes: [
      {
        name: "PAP",
        percent: 61.90,
      },
      {
        name: "PSP",
        percent: 38.10,
      },
    ],
    seats: 5,
  },
  {
    name: "Pasir Ris-Punggol",
    votes: [
      {
        name: "PAP",
        percent: 64.16,
      },
      {
        name: "SDA",
        percent: 23.67,
      },
      {
        name: "PV",
        percent: 12.17,
      },
    ],
    seats: 5,
  },
  {
    name: "Sembawang",
    votes: [
      {
        name: "PAP",
        percent: 67.29,
      },
      {
        name: "NSP",
        percent: 32.71,
      },
    ],
    seats: 5,
  },
  {
    name: "Tampines",
    votes: [
      {
        name: "PAP",
        percent: 66.41,
      },
      {
        name: "NSP",
        percent: 33.59,
      },
    ],
    seats: 5,
  },
  {
    name: "Tanjong Pagar",
    votes: [
      {
        name: "PAP",
        percent: 63.1,
      },
      {
        name: "PSP",
        percent: 36.9,
      },
    ],
    seats: 5,
  },
  {
    name: "West Coast",
    votes: [
      {
        name: "PAP",
        percent: 51.68,
      },
      {
        name: "PSP",
        percent: 48.32,
      },
    ],
    seats: 5,
  },
];
