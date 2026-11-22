const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json({ service: 'A', express: require('express/package.json').version });
});
app.listen(3001, () => console.log('A jalan di 3001'));