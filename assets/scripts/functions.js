showTime();
var gasLevel = 0;
var batLevel = 0;
var isTraction = 1;
var isParked = 1;
var intMode = 0;

function getGas() {
    if (gasLevel === 0) {
        gasLevel = 1;
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_1.PNG';
        document.getElementById('gas').src = './assets/images/gas1.png';
    } else {     
        gasLevel = 0;
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_0.PNG';
        document.getElementById('gas').src = './assets/images/gas0.png';
    }
}

function tracControl() {
    if (isTraction === 0) {
        isTraction = 1;
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_1.PNG'
        document.getElementById('trac').src = './assets/images/trac0.PNG'
    } else {
        isTraction = 0;
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_0.PNG'
        document.getElementById('trac').src = './assets/images/trac1.PNG'
    }
}

function chargeBatt() {
    if (batLevel === 0) {
        batLevel = 1;
        document.getElementById('bttn_batt').src = './assets/images/bttn_batt_1.PNG';
        document.getElementById('batt').src = './assets/images/batt1.PNG'
    } else {
        batLevel = 0;
        document.getElementById('bttn_batt').src = './assets/images/bttn_batt_0.PNG';
        document.getElementById('batt').src = './assets/images/batt0.PNG'
    }
}

function setBrake() {
    if (isParked === 0) {
        isParked = 1;
        document.getElementById('bttn_park').src = './assets/images/bttn_park_1.PNG';
        document.getElementById('brake').src = './assets/images/p1.PNG'
    } else {
        isParked = 0;
        document.getElementById('bttn_park').src = './assets/images/bttn_park_0.PNG';
        document.getElementById('brake').src = './assets/images/p0.PNG'
    }
}

function setMode() {
    var status = document.getElementById('mode');
    var shifterImg = document.getElementById('bttn_shifter');
    switch (intMode) {
        case 0:
            intMode = 1;
            shifterImg.style.top = '725px';
            status.innerText = 'ECO PRO';
            break;
        case 1:
            intMode = 2;
            shifterImg.style.top = '750px';
            status.innerText = 'COMFORT';
            break;
        case 2:
            intMode = 3;
            shifterImg.style.top = '775px';
            status.innerText = 'SPORT';
            break;
        default:
            intMode = 0;
            shifterImg.style.top = '700px';
            status.innerText = 'PARK';
            break;
    }
}