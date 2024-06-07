const submitBtn = document.getElementById('submitBtn');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please write the name before searching`;
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=620f911b33c20a8ad02ff88a4a0c0161`
            // console.log(response);
            const response = await fetch(url);
            console.log(response);
            const data = await response.json();
            if (data.cod === 200) {
                temp.innerText = data.main.temp;
                temp_status.innerText = data.weather[0].main;
            }
             else{
                city_name.innerText = `Please enter a valid city name`;
            }
        } catch (error) {
            city_name.innerText = `Please enter the name properly`;
        }
    }
}

submitBtn.addEventListener('click', getInfo);   