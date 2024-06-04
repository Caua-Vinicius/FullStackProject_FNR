const express = require('express');
const app = express();
const routerApi = require('./routes/api');
const router = require('./routes/web');

const { bootstrapApp } = require('./app/bootstrap');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

bootstrapApp(app);

app.use('/api', routerApi);
app.use('/', router);

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Servidor web iniciado: http://localhost:${PORT}/`);
});
