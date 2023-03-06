const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.send('Hi from Cloud Run!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server listening on port ${PORT}...');
});
