// require in the express package
const express = require('express');

// instantiate our express app
const app = express();

// when a request is made from index.html for a resource at /css
// look for it in public/assets/css
app.use('/css', express.static('public/assets/css'));

// when a request is made from our index.html for a resource at /scripts
// look for it in node_modules
app.use('/scripts', express.static('node_modules'));

// when a request is made from index.html for a resource at /js
// look for it in public/assets/js
app.use('/js', express.static('public/assets/js'));

// when get requests is made to the root
// serve up the specified file
app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

const lamps = [
  'venetian lamp',
  'stained glass lamp',
  'parrot lamp',
  'flower print lamp'
];

// when a get request is made to /lamps
// send the lamp data to the browser
app.get('/lamps', (request, response) => {
  response.json(lamps);
});

// spins up a server to listen on port 3000
app.listen(3000, () => {
  console.log('server listening on port 3000');
});
