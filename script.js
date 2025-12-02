
 let user = document.querySelector(".user")
let searchbtn = document.querySelector(".searchbtn")
let errorBox=document.querySelector(".errorBox")
const cityname=document.querySelector(".cityname")
const temperature=document.querySelector(".temperature")
const powerrange =document.querySelector(".powerrange")
const wpowerrange=document.querySelector(".wpowerrange")
const weatherimg=document.querySelector(".weatherimg")
const imgweather = document.querySelector(".imgweather")

function weatherImg(img){
  climate = img.toLowerCase();
  console.log(climate);
    if (climate.includes("haze")) return "asset/Haze.png";
    if (climate.includes("fog")) return "asset/Fog.png";
    if (climate.includes("cloud")) return "asset/Clouds.png";
    if (climate.includes("rain")) return "asset/Rain.png";
    if (climate.includes("drizzle")) return "asset/Rain.png";
    if (climate.includes("thunder")) return "asset/Thunderstorm.png";
    if (climate.includes("snow")) return "asset/Snow.png";
    if (climate.includes("clear")) return "asset/Sunny.png";
    if (climate.includes("mist")) return "asset/Mist.png";

}

const weathers =async (area)=>{
    const Api = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=2bd09286b977a9059a0d04ae10b735c1`
    const a = await fetch(Api)
    const data =  await a.json()
    console.log(data);
    if(cityname.cod=="404"){
        cityname.innerHTML="please enter a city"
        weathercast.style.display = "none";
        ranges.style.display = "none";
        return;
    }else{
        cityname.innerHTML=data.name

    }


    

    temperature.innerHTML=Math.round(data.wind.deg)+"°C"
    powerrange.innerHTML=data.main.humidity
    wpowerrange.innerHTML=data.wind.speed
    const imageFind=data.weather[0].main
    imgweather.src=weatherImg(imageFind)
    console.log(data.weather[0].main);
   
}


searchbtn.addEventListener("click",()=>{
   if(user.value.trim()!==""){
     errorBox.innerHTML=""
     console.log(user.value);

     weathers(user.value)
     

     user.value=""
   }
   else{
     errorBox.textContent="Please enter your city"
   }
})


