const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const ngrok = require('ngrok');
const BigCommerce = require('node-bigcommerce');

const bigCommerce = new BigCommerce({
    logLevel: 'info',
    clientId: '90mi6qsrv1i2r54ec5qzrn3lkh099e4',
    secret: '462c7f0a825c835db125a8c05b187f166494657378937c07848f7d450313ab9c',
    responseType: 'json',
    headers: { 'Accept-Encoding': '*' }, // Override headers (Overriding the default encoding of GZipped is useful in development)
    apiVersion: 'v3' // Default is v2
});

app.get('/auth', (req, res, next) => {
    bigCommerce.authorize(req.query)
        .then(data => res.render('integrations/auth', { title: 'Authorized!', data: data })
            .catch(next));

});
// const BigCommerce = require('bigcommerce');

// const bigCommerce = new BigCommerce({
//     clientId: '90mi6qsrv1i2r54ec5qzrn3lkh099e4',
//     secret: '462c7f0a825c835db125a8c05b187f166494657378937c07848f7d450313ab9c',
//     accessToken: '696t3jfoyir806i0qc3h27e40latyl7',
//     storeHash: '4734oauvl8',
//     responseType: 'json',
//   });

//   bigCommerce.get('/catalog/products')
//   .then(data => {
//     console.log('Products:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// (async function() {
//   const url = await ngrok.connect(3000);
//   console.log('Ngrok URL:', url);
// })();

app.use(cors());


app.get('/checkout.js', (req, res) => {

    console.log("checkoutabc");
    res.status(200).json({
        "wholesaler": [
            "cod",
            "bank-deposit"
        ],
        "retailer": [
            "cod"

        ]
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

