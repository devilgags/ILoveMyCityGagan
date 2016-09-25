exports.home = function (req, res) {
  res.render('home', {
    title: 'iLoveMyCity',
    headline: 'We believe that every city have something to say'
  });
}


exports.city = function (req, res) {
  var cityName = req.params.city;
  var title, heading;
  var imageCount = 4;

  switch (cityName) {
    case 'berlin':
      title = "Berlin";
      heading = "Berlin: Where love is in the air";
      break;

    case 'madrid':
      title = "Madrid";
      heading = "Madrid: Buzz, Beautiful architecture and Football";
      break;

    case 'london':
      title = "London";
      heading = "London: Sparkling, Still, Food, Gorgeous";
      break;

    case 'paris':
      title = "Paris";
      heading = "Paris: Good talkers are only found in Paris";
      break;

    case 'newyork':
      title = "New York";
      heading = "New York: Come to New York to become someone new";
      imageCount = 6;
      break;

    case 'london':
      title = "London";
      heading = "London: Sparkling, Still, Food, Gorgeous";
      break;

    default:
      break;
  }

  res.render('city', {
    title: title,
    headline: heading,
    city: cityName,
    numberOfImages: imageCount
  });
}
