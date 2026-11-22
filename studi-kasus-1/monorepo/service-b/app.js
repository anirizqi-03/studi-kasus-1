const express = require('express');
const app = express();
app.get('/*splat', (req, res) => {
  res.json({ service: 'B', express: require('express/package.json').version });
});
app.listen(3002, () => console.log('B jalan di 3002'));