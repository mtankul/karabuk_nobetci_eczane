const http = require('http');
var cron = require('node-cron');
const express = require("express");
const fs = require('fs');
var axios = require('axios');
var qs = require('qs');
const console = require('console');
var data = qs.stringify({

});
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
        varDataEcz = JSON.stringify(response.data);
        fs.writeFileSync("https://raw.githubusercontent.com/duhanbayrak/karabuk_nobetci_eczane/master/docs/dataset/ecz.json", varDataEcz);

        })
        .catch(function (error) {
            console.log(error);
        });




