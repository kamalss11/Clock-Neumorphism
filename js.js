const deg = 6
const hr = document.querySelector("#hr")
const mn = document.querySelector("#mn")
const sec = document.querySelector("#sec")
var h = document.querySelector("#h")
var m = document.querySelector("#m")
var s = document.querySelector("#s")
const analog = document.querySelector(".analog")
var ampm = document.querySelector("#ampm")
var dai = document.getElementById("day")
var mon = document.getElementById("mon")
var year = document.getElementById("year")
var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function toggleClass(){
    const body = document.querySelector("body")
    body.classList.toggle("light")
}

setInterval(() => {
    let day = new Date()
    console.log(day)
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg
    console.log(day.getHours()+" : "+day.getMinutes()+" : "+day.getSeconds())
    
    hr.style.transform = `rotateZ(${(hh)+(mm / 12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sec.style.transform = `rotateZ(${ss}deg)`

    if(day.getHours() > 12){
        h.innerHTML = `0${day.getHours() - 12}`
    }
    else{
        h.innerHTML = day.getHours()
    }

    if(day.getMinutes() < 10){
        m.innerHTML = `0${day.getMinutes()}`
    }
    else{
        m.innerHTML = day.getMinutes()
    }

    if(day.getSeconds() < 10){
        s.innerHTML = `0${day.getSeconds()}`
    }
    else{
        s.innerHTML = day.getSeconds()
    }

    if(day.getHours() > 12){
        ampm.innerHTML = "PM"
    }
    else{
        ampm.innerHTML = "AM"
    }

    dai.innerHTML = day.getDate()
    mon.innerHTML = `${month[day.getMonth()]},`
    year.innerHTML = day.getFullYear()
},1000)
