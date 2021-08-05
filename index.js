const fs = require('fs');
var axios = require('axios');
var qs = require('qs');
const console = require('console');
var data = qs.stringify({

});
var date = new Date();
var hour = date.getHours();

function veriCek() {
    var config = {
        method: 'get',
        url: 'https://www.nosyapi.com/apiv2/pharmacy?city=karabuk',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 47gch9lETlpp44KnOcHnuVy5VYKhy84tosYVbAlkq3FYBmvvTXkfvQZaLHQ9'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            varDataEcz = JSON.stringify(response.data,null,4);
            fs.writeFileSync("docs/dataset/ecz.json", varDataEcz);
            alert("Veri Çekildi",hour);
    
        })
        .catch(function (error) {
            console.log(error);
        });
    
        
}
veriCek();


