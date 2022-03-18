// Geolocation
let Geolocation_output = document.getElementById('Geolocation-output');

window.addEventListener('load', () => {
    let latitude;
    let longitude;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

                fetch(url, { method: 'GET' })

                    .then((res) => res.json())

                    .then((data) => {
                        let cityName = data.city.name
                        let weather = `${ data.list[0].temp.day }`
                        let output = `City:- ${ cityName }
                         Temprature:- ${ weather }°C`
                        console.log(data)
                        Geolocation_output.innerText = output;
                    })

        })
    }
})