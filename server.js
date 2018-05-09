/**
 * Created by Nisan on 1/21/18.
 */
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

let xyz = app.listen(process.env.PORT || 8080);



console.log("Nisan Port",xyz);
let jsonObject = {'name': 'nisan',
                  'age' : '26',
                    'city': "dallas"};
console.log("json object", jsonObject);
app.get('/testFile',(req,res)=>{
  if(res.error){
    console.log("something went wrong");
  }
  res.json(jsonObject);
})

app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log("we are listening at" + port);
