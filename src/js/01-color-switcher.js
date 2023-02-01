const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]')
};

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnClick)
let timerId = null;

refs.stopBtn.disabled = true;

function onStartBtnClick() {
    timerId = setInterval(onChangeBodyBgrClr, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
}

function onStopBtnClick() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}

function onChangeBodyBgrClr() {
    document.body.style.backgroundColor = getRandomHexColor()
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

