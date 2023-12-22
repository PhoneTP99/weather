const apiKey = "2a1c836de3f82aea9323329c498b8797";
const locationName = document.querySelector('.location-name');

const getWeatherByName = (cityName,apiKey) => {
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
     .then(response => response.json())
     .then((data)=>{
          console.log(data);
          if ( data.cod === '404') {
             return  alert("City's weather Not Found!");
          }
          document.querySelector('.city-name').innerHTML = `<h1>${(cityName).toUpperCase()}</h1>`;
          document.querySelector('.weather-status').innerHTML = `
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
          `;
          document.querySelector('.temperature').innerHTML =  `
          <h2 class="degree">${data.main.temp}<span class="degree-unit">&deg;C</span></h2>
          `;
          document.querySelector('.comment').innerHTML = `
          ${data.weather[0].description}
          `;
          document.querySelector('.humidity').innerHTML = `
          ${data.main.humidity}%
          `;
          document.querySelector('.windspeed').innerHTML = `
          ${data.wind.speed} km/h
          `;

          document.querySelector('.location-name').value = ' ';
     })
}

document.querySelector('.search').addEventListener('click',()=>{
     const cityName= locationName.value;
     getWeatherByName(cityName,apiKey);
})

document.querySelector('body').addEventListener('keydown' , (event) => {
     if (event.key === 'Enter') {
          const cityName = locationName.value;
          if ( cityName === ''){
               alert('Enter City Name')
          }
          getWeatherByName(cityName,apiKey);
     }
})

window.addEventListener('load' , ()=>{
     let lat;
     let long;
})