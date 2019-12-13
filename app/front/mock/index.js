'use strict';
const app = new (require('express'))();
const port = 3456;

app.get('/', (req, res) => {
  res.json({a: 100});
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info('listen: ', port);
  }
});