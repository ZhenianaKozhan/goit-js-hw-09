const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]')
};

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnClick)
let timerId = null;

refs.stopBtn.setAttribute('disabled', 0);

function onStartBtnClick() {
    timerId = setInterval(onChangeBodyBgrClr, 1000);
    refs.startBtn.setAttribute('disabled', 0);
    refs.stopBtn.removeAttribute('disabled');
}

function onStopBtnClick() {
    clearInterval(timerId);
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', 0);
}

function onChangeBodyBgrClr() {
    document.body.style.backgroundColor = getRandomHexColor()
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

