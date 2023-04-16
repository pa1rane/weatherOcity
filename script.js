let search = document.getElementById('search');
let temp = document.getElementById('temp');
let city = '';
let searchbtn = document.querySelector('.glyphicon')


const apiKey = "a7e8f435f82442bffda595411a33fc2d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";


searchbtn.addEventListener('click', ()=>{
  city = search.value;
  fetch(apiUrl + city + `&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
    console.log(data)
    const kTemp = data.main.temp;
    const fTemp = kTemp - 273.15;
    temp.innerHTML=fTemp.toFixed(0)+`°C`;
    document.getElementById('city').innerHTML = city
    })
    .catch(error => {
      console.log("Error: ", error)
    })
})