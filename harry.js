var isplaying = 0;
var maxtime = 0;
var elapsedtime = 0;
var interval;
window.addEventListener("load", () => {
    const sound = document.getElementById(".sound");
    const reset = document.querySelector(".player1");
    document.querySelector(".player").addEventListener("click",OnPlayerClick);
    interval = setInterval(timeCheck,500);
});

// reset.addEventListener("click",resetit);
// function resetit()
// {
//     sound.load();
//     sound.currentTime() = 0;
//     isplaying = 0;
//     maxtime = 0;
//     elapsedtime = 0;
// }
function OnPlayerClick()
{
    if(!isplaying)
    {
        sound.play();
        isplaying = true;
    }
    maxtime++;
    // sound.play();
}

function timeCheck()
{
    if(isplaying)
    {
        elapsedtime++;
        if(elapsedtime == maxtime)
        {
            isplaying = false;
            sound.pause();
        }
    }
    else if(elapsedtime < maxtime && !isplaying)
    {
        isplaying = true;
        sound.play();
    }
}