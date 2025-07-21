
  const apiKey = "611036834f4b29c3f53a7bbdce6c084c";
    const searchBtn = document.querySelector("button");
    const input = document.querySelector("input");
    const weatherIcon = document.querySelector(".weather img");

    async function getWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.status === 404 || data.cod === "404") {
            alert("Місто не знайдено 😢");
        } else {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " км/год";

            const condition = data.weather[0].main.toLowerCase();

            switch (condition) {
                case "clouds":
                    weatherIcon.src = "./img/clouds.png";
                    break;
                case "clear":
                    weatherIcon.src = "./img/clear.png";
                    break;
                case "rain":
                    weatherIcon.src = "./img/rain.png";
                    break;
                case "drizzle":
                    weatherIcon.src = "./img/drizzle.png";
                    break;
                case "snow":
                    weatherIcon.src = "./img/snow.png";
                    break;
                default:
                    weatherIcon.src = "./img/unknown.png";
            }
        }
    }

    
    searchBtn.addEventListener("click", () => {
        const cityName = input.value.trim();
        if (cityName !== "") {
            getWeather(cityName);
        }
    });

    
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const cityName = input.value.trim();
            if (cityName !== "") {
                getWeather(cityName);
            }
        }
    });
