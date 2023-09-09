const board = document.getElementById('container');
html = '';
for (let i = 0; i < 16; i++) {
    html += '<button class="square">&nbsp;</button>';
}
board.innerHTML = html;
const h3sidebar = document.querySelector('#sidebar h3');
h3sidebar.innerHTML = 'Klik MULAI untuk bermain?';
const btngrup = document.getElementById('btn-group');
btngrup.innerHTML= '<button id="ya" class="btn btn-primary" onclick="next(0)">MULAI</button>';

const cards = [
    [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
    [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31],
    [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31],
    [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31],
    [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
];

let nth_cards = 0;
let ans = 0;
function next(n) {
    ans += n;
    if (nth_cards < cards.length) {
        let i = 0;
        html = '';
        for (i = 0; i < cards[nth_cards].length; i++) {
             html += '<button class="square">'+cards[nth_cards][i]+'</button>';
        }
        board.innerHTML = html;
        h3sidebar.innerHTML = 'Tanggal lahir ada di kartu ini?';
        btngrup.innerHTML = '<button onclick="next('+cards[nth_cards][0]+')" class="btn btn-primary">Ya</button>'
                        + '&nbsp;&nbsp;<button onclick="next(0)" class="btn btn-danger">Tidak</button>';
        nth_cards++;
    } else {
        h3sidebar.innerHTML = 'Tanggal Lahir Anda adalah ... ';
        btngrup.innerHTML = '<button class="btn btn-success" onClick="window.location.reload();">'+ans+'</button>';
    }
}