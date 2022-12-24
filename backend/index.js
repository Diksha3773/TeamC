const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');
const routesHandler = require('./routes/handler.js');
const checkDepartment=require('./routes/checkDepart.js');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const _dirname = path.resolve();

app.use('/:dept',checkDepartment);
app.use('/:dept', routesHandler);

app.use(express.static(path.join('/opt/render/project/src', '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join('/opt/render/project/src', '/frontend/build/index.html'))
);
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
    console.log('DB Connected!');
})
.catch( (err) => {
    console.log(err);
});



const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
