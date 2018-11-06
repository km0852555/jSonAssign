const jsonfile = require('jsonfile');
const file = 'data.json';
jsonfile.readFile(file, function(err, obj)
{
    if(err)
    {
        console.error(err);
    }
    console.dir(obj);
});