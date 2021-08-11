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
            'Authorization': 'Bearer SKiqnEFEl0i7INX3mrRU0ygETtgyGNqnOYtsBbZlimHFUramK7fY8lK4ycU4'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            varDataEcz = JSON.stringify(response.data,null,4);
            fs.writeFileSync("docs/dataset/ecz.json", varDataEcz);
            console.log("Veri Çekildi",hour);
    
        })
        .catch(function (error) {
            console.log(error);
        });
    
        
}
veriCek();


