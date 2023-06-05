const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/display', (req, res) => {
  res.sendFile(__dirname + '/public/display.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});