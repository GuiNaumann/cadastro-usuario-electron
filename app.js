const express = require('express');
const bodyParser = require('body-parser');
const alunoRoutes = require('./routes/alunos');
const sequelize = require('./config/database');
const app = express();

app.use(bodyParser.json());
app.use('/api', alunoRoutes);

sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Error syncing database:', err));

module.exports = app;
