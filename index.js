setInterval(() => {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let hr_rotation = 30 * hr + min / 2;
    let min_rotation = 6 * min;
    let sec_rotation = 6 * sec;

    document.getElementById('hour').style.transform = `rotate(${hr_rotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${min_rotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
