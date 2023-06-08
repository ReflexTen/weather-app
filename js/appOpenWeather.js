export const getWeatherData = async city => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7566f107a9ae92df58d90b207cd86f31&lang=ru&units=metric`
    )

    return await response.json()
  } catch (err) {
    console.log(err)
  }
}
