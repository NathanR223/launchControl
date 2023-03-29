function tryLaunch() {
    var canLaunch = 1;
    var errMsg = document.getElementById('msg');
    var launchIndicatorImg = document.getElementById('launch');

    if (gasLevel === 0) {
        canLaunch = 0;
        errMsg.innerHTML = 'Not enough gas';
    }

    if (batLevel === 0) {
        canLaunch = 0;
        errMsg.innerHTML = 'No battery charge';
    }

    if (isTraction === 1) {
        canLaunch = 0;
        errMsg.innerHTML = 'Traction control must be off';
    }

    if (isParked === 1) {
        canLaunch = 0;
        errMsg.innerHTML = 'Brake must be disengaged';
    }

    if (intMode < 3) {
        canLaunch = 0;
        errMsg.innerHTML = 'Must be in sport mode';
    }

    if (canLaunch === 1) {
        errMsg.innerHTML = '';
        launchIndicatorImg.src = './assets/images/lca1.PNG';
        new Audio('./assets/media/launch.mp3').play();
    } else {
        launchIndicatorImg.src = './assets/images/lca0.PNG';
        new Audio('./assets/media/sputter.mp3').play();
    }
}