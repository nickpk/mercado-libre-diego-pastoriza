var request = require('request');
const express = require('express');
const app = express();
const fetch = require('node-fetch');

var searchUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=:';
var descriptionUrl = 'https://api.mercadolibre.com/items/';


app.use((rq, rs, next) => {
    rs.header('Access-Control-Allow-Origin', '*');
    rs.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    rs.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    rs.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//settings
app.set('port', 3500);

// calls
app.get('/', function (req, res) {
    res.send("Hello world");
});
  
app.get('/api/query/:query', function (req, res) {
  let query = req.params.query;
    let url = searchUrl + query;
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
  
        var resultsItems = info.results;
        var items = [];
        var categories = [];
        for (let i = 0; i < resultsItems.length; i++) {
  
          categories.push(resultsItems[i].category_id);
  
          items.push({
            id: resultsItems[i].id, title: resultsItems[i].title,
            price: { currency: resultsItems[i].currency_id, amount: resultsItems[i].price, decimals: 0 },
            picture: resultsItems[i].thumbnail, condition: resultsItems[i].condition, free_shipping: resultsItems[i].free_shipping, address: resultsItems[i].address.city_name
          })
        }
        res.json({ author: { name: "Diego", lastname: "Pastoriza" }, categories: [categories], items: [items] })
      }
    })
  
});

function parseJSON(resp) {
    return resp.json();
}

function statusInfo(resp) {
    if (resp.ok) {
      return Promise.resolve(resp);
    } else {
      return Promise.reject(new Error(resp.statusText));
    }
}
  




app.listen(app.get('port'), () => {
    console.log('Server en puerto', app.get('port'))
});