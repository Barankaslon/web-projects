<?php

     error_reporting(E_ERROR | E_PARSE);

     $weather = "";
     $error = "";

     if(isset($_GET['city'])) {

          $weatherApi = file_get_contents('http://api.openweathermap.org/data/2.5/weather?q='.$_GET['city'].'&units=metric&appid=d4ce8f32fce7a86897d8c0026c5dc921');

          $forecastArray = json_decode($weatherApi, true);

/*           print_r($forcastArray); */

          if($forecastArray['cod'] == 200) {
               $weather = 'The weather in '.$_GET['city'].' is '.$forecastArray['weather'][0]['description'];
               $weather = $weather.'. The temperature is '.$forecastArray['main']['temp'].' &#8451;';
               $weather = $weather.'. Wind speed '.$forecastArray['wind']['speed'].' m/sec';
          } else {
               $error = "The city name is incorrect";
          }


     }

?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>Weather App</title>
  </head>
  <body>

  <div class="container" id="mainDiv">
     <h1>Weather In The City</h1>

          <form>
               <div class="mb-3">
               <label for="city" class="form-label">Name of City</label>
               <input class="form-control" id="city" name="city" aria-describedby="Forcast in City"
               placeholder="Enter City Name">
               </div>
               <button type="submit" class="btn btn-dark">Submit</button>
          </form>
  </div>

     <div id="forecastDiv">
          
          <?php

          if($weather) {
               echo '<div class="alert alert-light" role="alert">'.$weather.'</div>';
          } else if ($error) {
               echo '<div class="alert alert-danger" role="alert">'.$error.'</div>';
          }


          ?>
          
     </div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
  </body>
</html>


