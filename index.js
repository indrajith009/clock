const time_Id = document.getElementById("time_id");

function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    const timeStr = `${hour.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;

    time_Id.innerText = timeStr;
}

updateClock();
setInterval(updateClock, 1000);

