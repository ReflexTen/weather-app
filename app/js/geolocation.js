import { appWeather } from './appWeather.js'

export const handleWeatherByLocation = () => {
  const option = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }

  const success = async pos => {
    const crd = pos.coords

    const res = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=3380a333c3e64fd5835adb69973af0d2`
    )

    const result = await res.json()

    const selectedCity = result.features[0].properties.city
    localStorage.setItem('city', JSON.stringify(selectedCity))

    appWeather(selectedCity)
  }

  const error = err => {
    console.log(err.code + ' ' + err.mesage)
  }
  navigator.geolocation.getCurrentPosition(success, error, option)
}
