var http = require('http');
var data_arr = ['', '', ''];
var counter = 0;

function increase_counter(){
  counter++;
  if(counter == 3){
    for(var i = 0; i < data_arr.length; i++)
      console.log(data_arr[i]);
  }
}

function http_get(url, i){
  http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on("data", function (data) { data_arr[i] += data; });
    response.on("end", function () { increase_counter(); });
  });
}

for(var i = 2; i < process.argv.length; i++)
  http_get(process.argv[i], i-2);
