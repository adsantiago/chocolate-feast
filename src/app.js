const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

//Importing routes
const customRoutes = require('./routes/customRoutes');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

//Routes
app.use('/', customRoutes);

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});