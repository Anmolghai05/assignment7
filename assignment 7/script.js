const input=document.getElementById('input');
const btn=document.getElementById('btn');
const form=document.querySelector('form');

let key=`bd72b4de23bf8e7ad16a80e148b160df`;

const div=document.querySelector(".details");
const body=document.querySelector('body');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let city=input.value;

    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

    fetch(url)
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        div.innerHTML="";
        let city=data.name;
        let country=data.sys.country;
        let temp=data.main.temp-273.5;
        let description=data.weather[0].descripton;
        let icon=data.weather[0].icon;
        let wind=data.wind.speed;

        console.log(icon);

        div.innerHTML = `
        <div class="location">${city}, ${country}</div>
        <div><i class="fas fa-wind"></i> ${wind} km/h</div><br>
        <div class="temp">${Math.floor(temp)}&#8451</div><br>
        <div class="des">${description}</div>
        `
        
        
    })
    .catch(err=>{
        div.innerHTML="";
        div.innerHTML=`city not found`
    })
    input.value="";

})
