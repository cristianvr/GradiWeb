window.onload = ()=> {
    var dateToday = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // console.log( days[dateToday.getDay()]);

    var tempBog = 0;
    var iconBog;

    var tempBogContainer = document.getElementById("tempBogContainer");
    var iconBogWeather = document.getElementById("iconBogWeather");

    // Tomorrow
    var iconTomorrow;
    var dayTomorrow = ((dateToday.getDay()+1) > 6) ? days[(dateToday.getDay()+1) - 7] : (days[dateToday.getDay()+1]);
    var weatherTomorrowIcon = document.getElementById("weatherTomorrowIcon");
    var weatherTomorrowMinMax = document.getElementById("weatherTomorrowMinMax");

    //Two Days
    var iconTwoDay;
    var twoDay = ((dateToday.getDay()+2) > 6) ? days[(dateToday.getDay()+2) - 7] : (days[dateToday.getDay()+2]);
    var weatherTwoDayIcon = document.getElementById("weatherTwoDayIcon");
    var weatherTwoDayMinMax = document.getElementById("weatherTwoDayMinMax");

    //Three Days
    var iconThreeDay;
    var ThreeDay = ((dateToday.getDay()+3) > 6) ? days[(dateToday.getDay()+3) - 7] : (days[dateToday.getDay()+3]);
    var weatherThreeDayIcon = document.getElementById("weatherThreeDayIcon");
    var weatherThreeDayMinMax = document.getElementById("weatherThreeDayMinMax");

    $.get("https://api.openweathermap.org/data/2.5/forecast",{q:"bogota",cnt:4,appid:"a45cca1adc0d9f42c76c8f045ef02a47" },
        (data)=>{
            // console.log(data);
            let today = data.list[0];
            let tomorrow = data.list[1];
            let inTwoDays = data.list[2];
            let inThreeDays = data.list[3];

            iconBog = today.weather[0].icon;
            tempBog = today.main.temp -273,1;

            iconBogWeather.src = "https://openweathermap.org/img/wn/"+iconBog+".png";
            tempBogContainer.innerHTML = tempBog.toFixed(0) + "<sup>°C</sup>";

            //tomorrow card
            iconTomorrow = tomorrow.weather[0].icon;
            weatherTomorrowIcon.src = "https://openweathermap.org/img/wn/"+iconTomorrow+".png";
            document.getElementById("dayNameTomorrow").innerHTML = dayTomorrow + "<span style='color: #c9c7c7;'>"+tomorrow.weather[0].main+"</span>";
            var min_temp = tomorrow.main.temp_min -273.1;
            var max_temp = tomorrow.main.temp_max -273.1;
            weatherTomorrowMinMax.innerHTML = min_temp.toFixed(0) + "<sup>°</sup>/" + (max_temp).toFixed(0) + "<sup>°</sup>";
            
            //Two day card
            iconTwoDay = inTwoDays.weather[0].icon;
            weatherTwoDayIcon.src = "https://openweathermap.org/img/wn/"+iconTwoDay+".png";
            document.getElementById("dayNameTwoDay").innerHTML = twoDay + "<span style='color: #c9c7c7;'>"+inTwoDays.weather[0].main+"</span>";
            var min_temp = inTwoDays.main.temp_min -273.1;
            var max_temp = inTwoDays.main.temp_max -273.1;
            weatherTwoDayMinMax.innerHTML = min_temp.toFixed(0) + "<sup>°</sup>/" + (max_temp).toFixed(0) + "<sup>°</sup>";
            
            //Three Day card
            iconThreeDay = inThreeDays.weather[0].icon;
            weatherThreeDayIcon.src = "https://openweathermap.org/img/wn/"+iconThreeDay+".png";
            document.getElementById("dayNameThreeDay").innerHTML = ThreeDay + "<span style='color: #c9c7c7;'>"+inThreeDays.weather[0].main+"</span>";
            var min_temp = inThreeDays.main.temp_min -273.1;
            var max_temp = inThreeDays.main.temp_max -273.1;
            weatherThreeDayMinMax.innerHTML = min_temp.toFixed(0) + "<sup>°</sup>/" + (max_temp).toFixed(0) + "<sup>°</sup>";
            
        }
    );

    $.get("https://api.openweathermap.org/data/2.5/weather",{q:"paris",appid:"a45cca1adc0d9f42c76c8f045ef02a47" },
        (data)=>{
                       
            let iconParis = data.weather[0].icon;
            let tempParis = data.main.temp - 273.1;
            let humidity = data.main.humidity;
            let cardinalDegress = data.wind.deg;
            let velocity = data.wind.speed;
            // console.log);
            let iconParisWeather = document.getElementById("iconParisWeather");
            let parisTemp = document.getElementById("parisTemp");
            let humidityItemData = document.getElementById("humidityItem");
            let cardinalItemData = document.getElementById("cardinalItem");
            let velocityItemData = document.getElementById("velocityItem");

            iconParisWeather.src = "https://openweathermap.org/img/wn/"+iconParis+".png";
            parisTemp.innerHTML = tempParis.toFixed(0)+"<sup>°C</sup>"; 
            humidityItemData.innerHTML = "Humidity "+humidity+"%";
            cardinalItemData.innerHTML = getCardinalPointName(cardinalDegress);
            velocityItemData.innerHTML = velocity+"km/h";
        
        }
    );

    $.get("https://api.openweathermap.org/data/2.5/weather",{q:"lyon",appid:"a45cca1adc0d9f42c76c8f045ef02a47" },
        (data)=>{
                       
            let iconLyon = data.weather[0].icon;
            let tempLyon = data.main.temp - 273.1;
            let humidity = data.main.humidity;
            let cardinalDegress = data.wind.deg;
            let velocity = data.wind.speed;
            // console.log);
            let iconLyonWeather = document.getElementById("iconLyonWeather");
            let LyonTemp = document.getElementById("LyonTemp");
            let humidityItemData = document.getElementById("humidityItemLyon");
            let cardinalItemData = document.getElementById("cardinalItemLyon");
            let velocityItemData = document.getElementById("velocityItemLyon");

            iconLyonWeather.src = "https://openweathermap.org/img/wn/"+iconLyon+".png";
            LyonTemp.innerHTML = tempLyon.toFixed(0)+"<sup>°C</sup>"; 
            humidityItemData.innerHTML = "Humidity "+humidity+"%";
            cardinalItemData.innerHTML = getCardinalPointName(cardinalDegress);
            velocityItemData.innerHTML = velocity+"km/h";
        
        }
    );

}

function getCardinalPointName(degress){
    let cardinalPoitn;
    if((degress > -1 && degress < 45) || degress > 359){
        cardinalPoitn = "North";
    }else if(degress > 44 && degress < 90){
        cardinalPoitn ="North East";
    }else if(degress > 89 && degress < 135){
        cardinalPoitn ="East";
    }else if(degress > 134 && degress < 180){
        cardinalPoitn ="South East";
    }else if(degress > 179 && degress < 225){
        cardinalPoitn ="South";
    }else if(degress > 225 && degress < 270){
        cardinalPoitn ="South West";
    }else if(degress > 269 && degress < 314){
        cardinalPoitn ="West";
    }else if(degress > 314 && degress < 360){
        cardinalPoitn ="North Eest";
    }
    return cardinalPoitn;
}