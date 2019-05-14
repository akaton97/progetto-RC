var request = require("request");

var options = { method: 'GET',
  url: 'https://api.themoviedb.org/3/genre/movie/list',
  qs: { language: 'en-US', api_key: '807244b48f548385eab5d123309248e6' },
  body: '{}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});