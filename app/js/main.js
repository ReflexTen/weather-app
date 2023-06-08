'use strict'
//------------------imorts------------------//
import { cToF } from './choiceUnits.js'
import { handleWeatherByLocation } from './geolocation.js'
import { appWeather } from './appWeather.js'
//------------------imorts------------------//

//------------------showSecrhCityInput------------------//
const body = document.querySelector('body')
const selectionСity = document.querySelector('.selection__city')
const formChangeCity = document.querySelector('.header__form')
const formInput = document.querySelector('.header__form-input')

selectionСity.addEventListener('click', () => {
  formChangeCity.classList.add('show')
  formChangeCity.classList.remove('hidden')
})
//------------------showSecrhCityInput------------------//

//------------------hiddenSecrhCityInput------------------//
function closeModal() {
  formChangeCity.classList.add('hidden')
  formChangeCity.classList.remove('show')
}

body.addEventListener('click', e => {
  const target = e.target
  const form = e.target.closest('.header__form')

  if (!form && !target.classList.contains('selection__city')) {
    closeModal()
  }
})
//------------------hiddenSecrhCityInput------------------//

//------------------secrhCity------------------//
formChangeCity.addEventListener('submit', e => {
  e.preventDefault()

  appWeather(formInput.value)
})
//------------------secrhCity------------------//

//------------------unitSwitch------------------//
const temperature = document.querySelector('.temperature__num')
const celciusBtn = document.querySelector('.measure__degrees-celcius')
const fahrenheitBtn = document.querySelector('.measure__degrees-fahrenheit')
const celciusSymbol = document.querySelector('.temperature__measure-celcius')
const fahrenheitSymbol = document.querySelector(
  '.temperature__measure-fahrenheit'
)

let tempCelcius

function returnCelsius() {
  celciusBtn.classList.add('measure__degrees--active')
  fahrenheitBtn.classList.remove('measure__degrees--active')
  celciusSymbol.style.display = 'block'
  fahrenheitSymbol.style.display = 'none'
}

celciusBtn.addEventListener('click', () => {
  if (celciusBtn.classList.contains('measure__degrees--active')) {
    return
  }

  returnCelsius()
  temperature.textContent = tempCelcius
})

fahrenheitBtn.addEventListener('click', () => {
  if (fahrenheitBtn.classList.contains('measure__degrees--active')) {
    return
  }
  fahrenheitBtn.classList.add('measure__degrees--active')
  celciusBtn.classList.remove('measure__degrees--active')
  fahrenheitSymbol.style.display = 'block'
  celciusSymbol.style.display = 'none'

  tempCelcius = +temperature.textContent

  const temperatureConvert = cToF(+temperature.textContent)
  temperature.textContent = Math.floor(temperatureConvert)
})
//------------------unitSwitch------------------//

//------------------myLocation------------------//
const location = document.querySelector('.selection__location')
location.addEventListener('click', handleWeatherByLocation)
//------------------myLocation------------------//

export { returnCelsius, closeModal }
