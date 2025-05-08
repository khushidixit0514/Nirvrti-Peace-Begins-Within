const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));  // Serve static files from public folder

// Route to save writings
app.post('/save-writing', (req, res) => {
  const writing = req.body.writing;
  const filePath = path.join(__dirname, 'writings.txt');
  
  fs.appendFileSync(filePath, writing + '\n\n');
  res.send('Your writing has been saved!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
