const API_KEY = `03dc96c48ba51d0def382fd658a0d800`;
const searchTemperature =()=>{
    const city = document.getElementById("city-name")
    const cityText = city.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${API_KEY}&units=metric
`;
    // console.log(url)
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayTemparature(data))

}
const setInnerText = (id , text)=>{
   document.getElementById(id).innerText = text
}
const displayTemparature =(temparature)=>{
    setInnerText('city', temparature.name)
    setInnerText('temperature' , temparature.main.temp)
    setInnerText('condition', temparature.weather[0].main)
 console.log(temparature);

 //set weather icon
 const url = `https://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
 const imgIcon = document.getElementById('weather-icon')
 imgIcon.setAttribute('src', url)

}