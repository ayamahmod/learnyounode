var fs = require('fs')
var path = require('path');

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function (err, list) {
    if(err) return callback(err);
    filtered_list = [];
    for(var i = 0; i < list.length; i++){
      var ext2 = path.extname(list[i]);
      if(ext2 == '.' + ext)
        filtered_list.push(list[i]);
    }
    return callback(null, filtered_list);
  });
}
