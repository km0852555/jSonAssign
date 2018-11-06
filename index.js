var jsonfile = require('jsonfile');
var _ = require('lodash');
var file = 'data.json';
jsonfile.readFile(file, function(err, obj)
{
    _.forEach(obj, value =>
        {
            console.log(value);
        });

});