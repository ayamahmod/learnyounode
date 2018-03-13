var mymodule = require('./mymodule.js')
function callback(err, data){
  if(data === undefined) throw err;
  for(var i = 0; i < data.length; i++)
    console.log(data[i]);
}

mymodule(process.argv[2], process.argv[3], callback);
