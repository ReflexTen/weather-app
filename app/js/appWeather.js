import { getWeatherData } from './appOpenWeather.js'
import { windDirection } from './windDirection.js'
import { returnCelsius, closeModal } from './main.js'

//-----------------appWeather-------------------//

export const appWeather = async selectedСity => {
  try {
    const weather = await getWeatherData(selectedСity)

    if (weather.message) {
      console.log(weather.message)
      const errorBlock = document.querySelector('.header__error')
      errorBlock.classList.add('active')

      setTimeout(() => {
        errorBlock.classList.remove('active')
      }, 2000)
    } else {
      returnCelsius()
    }
    // localStorage.setItem('city', JSON.stringify(selectedСity))

    const city = document.querySelector('.header__city')
    const temp = document.querySelector('.temperature__num')
    const tempInfo = document.querySelector('.temperature__info')
    const tempIcon = document.querySelector('.temperature__image')
    const wind = document.querySelector('.weather-info__data-wind')
    const pressure = document.querySelector('.weather-info__data-pressure')
    const humidity = document.querySelector('.weather-info__data-humidity')
    const clouds = document.querySelector('.weather-info__data-clouds')
    const watherDescription = weather.weather[0].description

    city.textContent = `${weather.name}`
    temp.innerHTML = `${Math.floor(weather.main.temp)}`
    tempInfo.textContent = `${
      watherDescription.slice(0, 1).toUpperCase() + watherDescription.slice(1)
    }`
    tempIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`

    wind.textContent = `${weather.wind.speed} м/с ${windDirection(
      weather.wind.deg
    )}`
    pressure.textContent = `${weather.main.pressure} мм рт. ст.`
    humidity.textContent = `${weather.main.humidity}%`
    clouds.textContent = `${weather.clouds.all}%`

    console.log(weather)

    closeModal()
  } catch (error) {
    console.error(error)
  }
}

appWeather(JSON.parse(localStorage.getItem('city')) || 'Москва')

//-----------------appWeather-------------------//
