var request = require('request');
const express = require('express');
const fetch = require('node-fetch');
const app = express();


const searchUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=:';
const detailsUrl = 'https://api.mercadolibre.com/items/';


app.use((rq, rs, next) => {
    rs.header('Access-Control-Allow-Origin', '*');
    rs.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    rs.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    rs.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.set('port', 3500);

app.get('/', function (req, res) {
    res.send("Hola Bienvenidos a mi APP de Mercado libre, Mi nombre es Diego Pastoriza");
});
  
app.get('/api/query/:query', function (req, res) {
  let query = req.params.query;
    let url = searchUrl + query;
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
  
        var resultsItems = info.results;
        var products = [];
        var categories = [];
        for (let i = 0; i < resultsItems.length; i++) {
          categories.push(resultsItems[i].category_id);
          products.push({
            id: resultsItems[i].id, 
                title: resultsItems[i].title,
            price: { 
                currency: resultsItems[i].currency_id,
                amount: resultsItems[i].price, 
                decimals: 0 
            },
            thumbnail: 
                resultsItems[i].thumbnail, 
                condition: resultsItems[i].condition, 
                free_shipping: resultsItems[i].free_shipping, 
                address: resultsItems[i].address.city_name
          })
        }
        res.json({ author: { name: "Diego", lastname: "Pastoriza" }, categories: [categories], products: [products] })
      }
    })
  
});


app.get('/api/item/:id', function (req, res) {
  var id = req.params.id;
  var url = detailsUrl + id
  var descriptionUrl = url + "/description";
  const urls = [
    url,
    descriptionUrl
  ];

  Promise.all(urls.map(url =>
    fetch(url)
      .then(statusInfo)
      .then(parseJSON)
      .catch(error => console.log('Se a producido el siguiente error: ', error))
  ))
    .then(data => {
      res.json({
        author: { name: "Diego", lastname: "Pastoriza" },
        product: {
          id: data[0].id, 
              title: data[0].title,
          price: { currency: data[0].currency_id,
                   amount: data[0].price, 
                   decimals: data[0].base_price },

          thumbnail: data[0].thumbnail, 
                   condition: data[0].condition,
                  free_shipping: data[0].free_shipping,
         
          sold_quantity: data[0].sold_quantity, 
                         description: data[1].plain_text
        }
      });
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