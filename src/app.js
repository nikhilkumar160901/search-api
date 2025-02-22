const express = require('express');
const searchRoutes = require('./routes/searchRoutes');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
      openapi: '3.0.0',
      info: {
          title: 'Task Management API',
          version: '1.0.0',
          description: 'API for Task Management',
      },
      schemes: ['https', 'http'],
      servers: [
          {
              url: 'http://localhost:4003',
          },
      ],
  },
  apis: ['./src/routes/*.js'], 
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.use('/api', searchRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;