var isplaying = 0;
var maxtime = 0;
var elapsedtime = 0;
var interval;
window.addEventListener("load", () => {
    const sound = document.getElementById("sound");
    const reset = document.getElementById("player1");
    document.getElementById("player").addEventListener("click",OnPlayerClick);
    interval = setInterval(timeCheck,600);
    reset.addEventListener("click",() =>{
        sound.load();
        isplaying = 0;
        maxtime = 0;
        elapsedtime = 0;
    });
});

function OnPlayerClick()
{
    if(!isplaying)
    {
        sound.play();
        isplaying = true;
    }
    maxtime++;
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