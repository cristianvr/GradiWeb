<!DOCTYPE html>
<html lang="es">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf8"/>	
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
    <meta name="viewport" content="width=device-width, 
		user-scalable=no, initial-scale=1, minimun-scale=1>">
    <title>Cristian Valdez</title>

    <link rel="stylesheet" type="text/css" href="./css/index.css"></style>
    <link rel="stylesheet" type="text/css" href="./font-awesome/css/all.css"></style>
    <script type="text/javascript" src="./js/index.js" ></script>
    <script type="text/javascript" src="./js/jquery.js" ></script>
</head>
<body>

    <div id="generalContainer">
        <div id="bannerAdnWeatherContainer">
            <div id="BannerContainer">
                <section id="dataLocationContainer">
                    <i class="fa fa-map-marker"></i><p>Bogotá</p> 
                </section>
                
            </div>

            <div id="weatherDetails">
                <section id="iconBogContainer">
                    <img src="" alt="" id="iconBogWeather">
                </section>
                
                <p id="tempBogContainer"></p>
            </div>
        </div>
        
        <div id="Container">
            <div id="HorizontalWidgetsContainer">
                <section class="columWidgets">
                    <p class="columWidgetsTittle"><b>3 Days</b> Forecast</p>

                    <div class="TreedayCard">
                        <img src="" alt="logo" id="weatherTomorrowIcon">
                        <p class="date-and-state" id="dayNameTomorrow"></p>
                        <p class="min-max-weather" id="weatherTomorrowMinMax">Clima</p>
                    </div>
                    <div class="TreedayCard">
                        <img src="" alt="logo" id="weatherTwoDayIcon">
                        <p class="date-and-state" id="dayNameTwoDay"></p>
                        <p class="min-max-weather light" id="weatherTwoDayMinMax">Clima</p>
                    </div>
                    <div class="TreedayCard">
                        <img src="" alt="logo" id="weatherThreeDayIcon">
                        <p class="date-and-state" id="dayNameThreeDay"></p>
                        <p class="min-max-weather light" id="weatherThreeDayMinMax">Clima</p>
                    </div>
                </section>

                <section class="columWidgets" id="columWidgetsPlaceTo">
                    <p class="columWidgetsTittle"><b>Place to</b> Visit</p>
                    <img src="./img/singapur.jpg" id='imgPlaceTo' alt="" srcset="">
                </section>

                <section class="columWidgets" id="columWidgetsFinal">
                    <div id="topContainer"></div>
                    <div id="centerContainer">
                        <img src="img/center.jpg" alt="" srcset="">
                    </div>
                    <div id="bottomContainer">
                        <img src="img/bottom.jpg" alt="" srcset="">
                    </div>
                </section>
            </div>

            <div id="verticaWidgetsContainer">
                <section class="card">
                    <div class="superiorContent">
                        <section class="iconCardWeatherContainer"> 
                            <img src="" alt="icono" id="iconParisWeather">
                        </section>
                        <p class="dataCardWeather" id="parisTemp"></p>
                        
                        <p class="dataLocationCardWeather">Paris  <span>Francia</span></p>
                    </div>
                    <div class="inferiorContent">
                        <ul class="inferiorContentItemsList">
                            <li class="inferiorContentItem" id="humidityItem"></li>
                            <li class="inferiorContentItem" id="cardinalItem"></li>
                            <li class="inferiorContentItem" id="velocityItem"></li>
                        </ul>
                    </div> 
                </section>
                <section class="card">
                    <div class="superiorContent">
                        <section class="iconCardWeatherContainer"> 
                            <img src="" alt="icono" id="iconLyonWeather">
                        </section>
                        <p class="dataCardWeather" id="LyonTemp"></p>
                        
                        <p class="dataLocationCardWeather">Lyon  <span>Francia</span></p>
                    </div>
                    <div class="inferiorContent">
                        <ul class="inferiorContentItemsList">
                            <li class="inferiorContentItem" id="humidityItemLyon"></li>
                            <li class="inferiorContentItem" id="cardinalItemLyon"></li>
                            <li class="inferiorContentItem" id="velocityItemLyon"></li>
                        </ul>
                    </div> 
                </section>
                <section class="card" id="inferiorCard">
                    <button>Add Locations</button>
                    <img src="./img/city.png" alt="" srcset="">
                </section>
            </div>
        </div>
    </div>
    
</body>
</html>