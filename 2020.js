const colours = ['#2c5aa0', '#5193e5', '#afc6e9', '#faa', '#e75a65'];
// 0 - safe (pap) 1 - likely (pap) 2 - lean (pap) 3 - lean (wp) 4 - likely (wp)
const GRCSMC = [
    'BUKITBATOK',
    'BUKITPANJANG',
    'HONGKAHNORTH',
    'HOUGANG',
    'KEBUNBARU',
    'MACPHERSON',
    'MARYMOUNT',
    'MOUNTBATTEN',
    'PIONEER',
    'POTONGPASIR',
    'PUNGGOLWEST',
    'RADINMAS',
    'YIOCHUKANG',
    'BISHANTOAPAYOH',
    'CHUACHUKANG',
    'HOLLANDBUKITTIMAH',
    'JALANBESAR',
    'MARSLINGYEWTEE',
    'SENGKANG',
    'ALJUNIED',
    'ANGMOKIO',
    'EASTCOAST',
    'JURONG',
    'MARINEPARADE',
    'NEESOON',
    'PASIRRISPUNGGOL',
    'SEMBAWANG',
    'TAMPINES',
    'TANJONGPAGAR',
    'WESTCOAST',
    'YUHUA',
];
const results = {
    BUKITBATOK: {
        votes: [54.8, 45.2],
        opp: 'SDP',
        seats: 1,
    },
    BUKITPANJANG: {
        votes: [53.73, 46.27],
        opp: 'SDP',
        seats: 1,
    },
    HONGKAHNORTH: {
        votes: [60.99, 39.01],
        opp: 'PSP',
        seats: 1,
    },
    HOUGANG: {
        votes: [38.79, 61.21],
        opp: 'WP',
        seats: 1,
    },
    KEBUNBARU: {
        votes: [62.92, 37.08],
        opp: 'PSP',
        seats: 1,
    },
    MACPHERSON: {
        votes: [71.74, 28.26],
        opp: 'PPP',
        seats: 1,
    },
    MARYMOUNT: {
        votes: [55.04, 44.96],
        opp: 'PSP',
        seats: 1,
    },
    MOUNTBATTEN: {
        votes: [73.82, 26.18],
        opp: 'PV',
        seats: 1,
    },
    PIONEER: {
        votes: [62, 35.22, 2.78],
        opp: 'PSP/independent',
        seats: 1,
    },
    POTONGPASIR: {
        votes: [60.67, 39.33],
        opp: 'SPP',
        seats: 1,
    },
    PUNGGOLWEST: {
        votes: [60.98, 39.02],
        opp: 'WP',
        seats: 1,
    },
    RADINMAS: {
        votes: [74.01, 25.99],
        opp: 'Reform',
        seats: 1,
    },
    YIOCHUKANG: {
        votes: [60.82, 39.18],
        opp: 'PSP',
        seats: 1,
    },
    YUHUA: {
        votes: [70.54, 29.46],
        opp: 'SDP',
        seats: 1,
    },
    BISHANTOAPAYOH: {
        votes: [67.23, 32.77],
        opp: 'SPP',
    },
    CHUACHUKANG: {
        votes: [58.64, 41.36],
        opp: 'PSP',
    },
    HOLLANDBUKITTIMAH: {
        votes: [66.36, 33.64],
        opp: 'SDP',
    },
    JALANBESAR: {
        votes: [65.36, 34.64],
        opp: 'PV',
    },
    MARSLINGYEWTEE: {
        votes: [63.18, 36.82],
        opp: 'SDP',
    },
    SENGKANG: {
        votes: [47.88, 52.12],
        opp: 'WP',
    },
    ALJUNIED: {
        votes: [40.05, 59.95],
        opp: 'WP',
    },
    ANGMOKIO: {
        votes: [71.91, 28.09],
        opp: 'Reform',
    },
    EASTCOAST: {
        votes: [53.39, 46.61],
        opp: 'WP',
    },
    JURONG: {
        votes: [74.61, 25.39],
        opp: 'RDU',
    },
    MARINEPARADE: {
        votes: [57.74, 42.26],
        opp: 'WP',
    },
    NEESOON: {
        votes: [61.9, 23.67],
        opp: 'PSP',
    },
    PASIRRISPUNGGOL: {
        votes: [64.16, 23.67, 12.17],
        opp: 'SDA/PV',
    },
    SEMBAWANG: {
        votes: [67.29, 32.71],
        opp: 'NSP',
    },
    TAMPINES: {
        votes: [66.41, 33.59],
        opp: 'NSP',
    },
    TANJONGPAGAR: {
        votes: [63.1, 36.9],
        opp: 'PSP',
    },
    WESTCOAST: {
        votes: [51.68, 48.32],
        opp: 'PSP',
    },
};

for (let i = 0; i < GRCSMC.length; i++) {
    let aaa = document.getElementById(GRCSMC[i]);
    if (!aaa) console.log(GRCSMC[i] + ' 404 - element not found');

    let obj = results[GRCSMC[i]];
    if (!obj) console.log(GRCSMC[i] + ' 404 - results not found');
    let diff = 0;

    if (obj.votes.length == 3) {
        diff = obj.votes[0] - obj.votes[1] - obj.votes[2];
    } else {
        diff = obj.votes[0] - obj.votes[1];
    }
    let isOppWin = false;

    if (diff < 0) {
        diff = -diff;
        isOppWin = true;
    }
    let colour = '#fff';
    if (isOppWin) {
        if (diff > 20) {
            colour = colours[4];
        } else {
            colour = colours[3];
        }
    } else {
        if (diff > 40) {
            colour = colours[0];
        } else if (diff > 20) {
            colour = colours[1];
        } else {
            colour = colours[2];
        }
    }
    aaa.style.fill = colour;
    aaa.addEventListener('onmouseenter', mouseEnter(GRCSMC[i]));
    aaa.onmouseenter = function () {
        mouseEnter(GRCSMC[i], diff, isOppWin, colour);
    };
}

let box = document.getElementById('box');
const onMouseMove = (e) => {
    box.style.left = e.pageX + 'px';
    box.style.top = e.pageY + 'px';
};
document
    .getElementById('singapore-whole')
    .addEventListener('mousemove', onMouseMove);

function mouseEnter(id, diff, isOppWin, colour) {
    document.getElementById('constituent').innerText = getNameFromID(id);
    let databox = document.getElementById('data');
    let obj = results[id];
    if (!obj) console.log(id + ' 404 - results not found');
    let party = 'PAP';

    if (isOppWin) {
        party = obj.opp;
        databox.style.color = colours[3];
    } else {
        databox.style.color = colours[1];
    }
    databox.innerText = `${party} +${Math.abs(Math.round(diff * 10) / 10)}`;
}
function getNameFromID(id) {
    const nameIDPairs = [
        ['BUKITBATOK', 'Bukit Batok'],
        ['BUKITPANJANG', 'Bukit Panjang'],
        ['HONGKAHNORTH', 'Hong Kah North'],
        ['HOUGANG', 'Hougang'],
        ['KEBUNBARU', 'Kebun Baru'],
        ['MACPHERSON', 'Macpherson'],
        ['MARYMOUNT', 'Marymount'],
        ['MOUNTBATTEN', 'Mountbatten'],
        ['PIONEER', 'Pioneer'],
        ['POTONGPASIR', 'Potong Pasir'],
        ['PUNGGOLWEST', 'Punggol West'],
        ['RADINMAS', 'Radin Mas'],
        ['YIOCHUKANG', 'Yio Chu Kang'],
        ['BISHANTOAPAYOH', 'Bishan-Toa Payoh'],
        ['CHUACHUKANG', 'Chua Chu Kang'],
        ['HOLLANDBUKITTIMAH', 'Holland-Bukit Timah'],
        ['JALANBESAR', 'Jalan Besar'],
        ['MARSLINGYEWTEE', 'Marsiling-Yew Tee'],
        ['SENGKANG', 'Sengkang'],
        ['ALJUNIED', 'Aljunied'],
        ['ANGMOKIO', 'Ang Mo Kio'],
        ['EASTCOAST', 'East Coast'],
        ['JURONG', 'Jurong'],
        ['MARINEPARADE', 'Marine Parade'],
        ['NEESOON', 'Nee Soon'],
        ['PASIRRISPUNGGOL', 'Pasir ris-punggol'],
        ['SEMBAWANG', 'Sembawang'],
        ['TAMPINES', 'Tampines'],
        ['TANJONGPAGAR', 'Tanjong Pagar'],
        ['WESTCOAST', 'West Coast'],
        ['YUHUA', 'Yuhua'],
    ];
    console.log(id);
    for (let i = 0; i < nameIDPairs.length; i++) {
        if (id == nameIDPairs[i][0]) {
            return nameIDPairs[i][1];
        }
    }
}
