showTime();
var gasLevel = 0;

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