const express = require('express');
const app = express();

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'RealTimeForm API Documentation',
      version: '1.0.0',
      description: 'Documentation for Real time form Node.js API',
    },
  },
  apis: ['server.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
const port = 3000;

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Define routes
/**
 * @swagger
 * /:
 *   get:
 *     description: Let the user enter the data
 *     responses:
 *       200:
 *         description: Success response
 */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

/**
 * @swagger
 * /display:
 *   get:
 *     description: Fetch data from page one and display it dynamically
 *     responses:
 *       200:
 *         description: Success response
 */
app.get('/display', (req, res) => {
  res.sendFile(__dirname + '/public/display.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});