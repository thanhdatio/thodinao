const container = document.querySelector('#container');
const text = document.querySelector('.text');
const audio = document.querySelector('audio');
const toggleSoundBtn = document.querySelector('#toggleSound');

//Declared new variables for time
const totalTime = 900000;
const breathTime = (totalTime/4.8) * 2;
const holdTime = (totalTime/4.8);

breathAnimate();

function breathAnimate() {
    text.innerText= 'SỨC MẠNH';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText= 'NĂNG LƯỢNG';

        setTimeout(() => {
            text.innerText= 'TÌNH YÊU';
            container.className = 'container shrink';
        }, holdTime)
    }, breathTime)
}

setInterval(breathAnimate, totalTime);

audio.muted = true;
toggleSoundBtn.addEventListener('click', () => {
    audio.play(); 
  audio.muted = !audio.muted;
});


