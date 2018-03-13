var http = require('http');

http.get(process.argv[2], function (response) {
  var http_data = '';
  response.setEncoding('utf8');
  response.on("data", function (data) { http_data += data; });
  response.on("end", function () {
    console.log(http_data.length);
    console.log(http_data);
  });
});
